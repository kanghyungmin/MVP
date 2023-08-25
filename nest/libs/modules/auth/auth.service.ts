import { AccountService } from "@/nest/service/account.service";
import { Injectable } from "@nestjs/common";
import { RegisterAccountDto } from "../../dtos/account.dto";
import { AccountDocument } from "../../models/account.entity";

@Injectable()
export class AuthService {
  constructor(private AccountService: AccountService) {}

  async validateAccount(
    registerAccountDto: RegisterAccountDto
  ): Promise<AccountDocument | null> {
    const account: AccountDocument | null = await this.AccountService.findOne(
      registerAccountDto
    );

    if (!account) {
      return null;
    }
    return account;
  }
}
