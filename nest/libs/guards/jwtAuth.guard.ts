import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { ErrorType } from "../enums/errorType";
import { AccountDocument } from "../models/account.entity";
import { AccountService } from "@/nest/service/account.service";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(
    private jwtService: JwtService,
    private accountService: AccountService
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    if (authorization === undefined) {
      throw new HttpException(
        {
          status: "error",
          code: 2,
          message: ErrorType.E002_UNAUTHRIZED,
        },
        HttpStatus.UNAUTHORIZED
      );
    }

    const token = authorization.replace("Bearer ", "");
    const res = await this.validateToken(token);
    request.user = res;

    return true;
  }

  async validateToken(token: string) {
    let retVal: AccountDocument | null = null;
    let verifiedRes: AccountDocument | null | object = null;
    try {
      // const decodeVal: string | { [key: string]: any } =
      //   this.jwtService.decode(token);
      //token

      const secretKey = process.env.JWT_SECRET;
      verifiedRes = <AccountDocument>(
        this.jwtService.verify(token, { secret: secretKey })
      );
      retVal = await this.accountService.getAccountByEmail(
        (verifiedRes as AccountDocument).email
      );

      return retVal;
    } catch (error) {
      throw new HttpException(
        {
          status: "error",
          code: 2,
          message: ErrorType.E002_UNAUTHRIZED,
        },
        HttpStatus.UNAUTHORIZED
      );
    }
  }
}
