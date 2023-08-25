import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ErrorType } from "../enums/errorType";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());

    if (!roles) {
      //role이 없다면 false
      throw new HttpException(
        {
          status: "error",
          code: 1002,
          message: "roles is not defined",
        },
        HttpStatus.OK
      );
    }
    const request = context.switchToHttp().getRequest();
    const userType = request.user.type;

    if (!roles.includes(userType)) {
      throw new HttpException(
        {
          status: "error",
          code: 1001,
          message: "This role is not invalid",
        },
        HttpStatus.OK
      );
    }
    return true;
  }
}
