import { PassportStrategy } from "@nestjs/passport";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Strategy } from "passport-jwt";
import { ErrorType } from "../../enums/errorType";
import { RegisterAccountDto } from "../../dtos/account.dto";
import { AccountDocument } from "../../models/account.entity";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategyService extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string) {
    const user: AccountDocument | null = await this.authService.validateAccount(
      {
        email: email,
        password: password,
      } as RegisterAccountDto
    );

    if (!user) {
      throw new HttpException(
        {
          status: "error",
          code: 1,
          message: ErrorType.E001_ACCOUT_NOT_FOUND,
        },
        HttpStatus.OK
      );
    }
    // const isCorrectPW: boolean = await user.verifyPassword(password);
    // if (!isCorrectPW) {
    //   throw new HttpException(
    //     {
    //       status: "error",
    //       code: 222,
    //       message: ErrorType.E222_INCORRECT_PASSWORD,
    //     },
    //     HttpStatus.OK
    //   );
    // }
    return user;
  }
}
