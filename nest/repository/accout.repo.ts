import { InjectModel } from "@nestjs/mongoose";
import { ClientSession, Model } from "mongoose";

import { RegisterAccountDto } from "../libs/dtos/account.dto";
import { ErrorType } from "../libs/enums/errorType";
import { CustomError } from "../libs/utils/error.util";
import { Account, AccountDocument } from "../libs/models/account.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>
  ) {}

  async registerAccount(
    registerAccountDto: RegisterAccountDto
  ): Promise<AccountDocument | ErrorType> {
    let account: AccountDocument = new this.accountModel({
      email: registerAccountDto.email,
      password: registerAccountDto.password,
    });
    account = await account.save();

    return account;
  }

  async updateAccountInfo(
    account: AccountDocument,
    session?: ClientSession | null
  ) {
    await this.accountModel
      .updateOne(
        { _id: account._id },
        {
          $set: {
            type: account.type,
            pw: account.pw,
          },
        }
      )
      .session(session ? session : null);
  }
  async getAccountByEmail(email: string): Promise<AccountDocument> {
    const account = await this.accountModel.findOne({ email });

    if (!account) {
      throw new CustomError(ErrorType.E001_ACCOUT_NOT_FOUND, 1);
    }
    return account;
  }

  async getAccountList(
    start: number,
    length: number
  ): Promise<AccountDocument[]> {
    const accounts: AccountDocument[] = await this.accountModel
      .find({})
      .sort({ createdAt: -1 })
      .skip(start)
      .limit(length);
    return accounts;
  }
  async getAccountCount(): Promise<number> {
    const totalCount = await this.accountModel.countDocuments();
    return totalCount;
  }
}
