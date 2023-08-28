import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { ChangeRolesDto, RegisterAccountDto } from "../libs/dtos/account.dto";
import { AccountDocument } from "../libs/models/account.entity";
import { ErrorType } from "../libs/enums/errorType";
import { AccountRepository } from "../repository/accout.repo";
import { CustomError } from "../libs/utils/error.util";

@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private jwtService: JwtService,

    @InjectConnection(process.env.ATLAS_MONGO_DBNAME)
    private readonly mongoConnection: Connection
  ) {}

  async registerAccount(
    registerAccountDto: RegisterAccountDto
  ): Promise<AccountDocument> {
    const res: AccountDocument | ErrorType =
      await this.accountRepository.registerAccount(registerAccountDto);

    return res as AccountDocument;
  }

  async getToken(account: AccountDocument): Promise<string> {
    const payload = {
      email: account.email,
    };

    const token: string = this.jwtService.sign(payload);

    return token;
  }
  async login(account: AccountDocument): Promise<string> {
    const token: string = await this.getToken(account);
    return token;
  }
  async findOne(registerAccount: RegisterAccountDto) {
    const account = await this.accountRepository.getAccountByEmail(
      registerAccount.email
    );
    if (!account) return null;
    return account;
  }

  async getAccountByEmail(email: string) {
    const account: AccountDocument =
      await this.accountRepository.getAccountByEmail(email);
    if (!account) {
      throw new CustomError(ErrorType.E001_ACCOUT_NOT_FOUND, 1);
    }
    return account;
  }

  async changeRoles(reqDto: ChangeRolesDto) {
    const account: AccountDocument =
      await this.accountRepository.getAccountByEmail(reqDto.email);
    account.type = reqDto.newRole;
    const session = await this.mongoConnection.startSession();
    await session.withTransaction(async () => {
      await this.accountRepository.updateAccountInfo(account, session);
    });
  }
  async cngPwSvc(account: AccountDocument, newPw: string): Promise<void> {
    account.pw = newPw;
    await this.accountRepository.updateAccountInfo(account);
  }
}
