import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { AuthGuard } from "@nestjs/passport";
import { CustomError } from "../libs/utils/error.util";
import { ErrorType } from "../libs/enums/errorType";

import { HttpResDto } from "../libs/dtos/common.dto";
import type { AccountDocument } from "../libs/models/account.entity";
import { RegisterAccountDto } from "../libs/dtos/account.dto";
import { AccountService } from "../service/account.service";

@Controller("account")
@ApiTags("Account APIs")
export class AccountController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private accountService: AccountService
  ) {}

  @Post("/register")
  @ApiOperation({
    summary: "Generate user",
  })
  @ApiResponse({ status: 201, type: HttpResDto })
  async registerAccount(
    @Body() registerAccountDto: RegisterAccountDto
  ): Promise<HttpResDto> {
    const account: AccountDocument = await this.accountService.registerAccount(
      registerAccountDto
    );

    return { status: "ok" };
  }

  // @UseGuards(AuthGuard("local"))
  // @Post("/login")
  // @ApiOperation({
  //   summary: "Log in",
  // })
  // @ApiResponse({ status: 201, type: LoginDto })
  // @ApiBody({ type: LoginReqDto })
  // async getLogin(@Req() req: AccountReqDto): Promise<LoginDto | HttpResDto> {
  //   try {
  //     const account: AdminAccountDocument = req.user;
  //     const token: string = await this.adminAccountService.login(account);
  //     const resDto: LoginDto = {
  //       status: "ok",
  //       token,
  //     };
  //     return resDto;
  //   } catch (error) {
  //     let retVal = null;
  //     if (error instanceof CustomError) {
  //       retVal = {
  //         status: "error",
  //         code: error.code,
  //         message: error.message,
  //       };
  //     } else {
  //       retVal = {
  //         status: "error",
  //         code: ErrorType.E1000_UNDEFINED_ERROR,
  //         message: error.message,
  //       };
  //     }
  //     return retVal;
  //   }
  // }

  // @UseGuards(AuthGuard("local"))
  // @Post("/cngPW")
  // @ApiOperation({
  //   summary: "otp generation",
  // })
  // @ApiResponse({
  //   status: 201,
  //   type: genOtpDtoRes,
  // })
  // @ApiBody({ type: RegisterAccountDto })
  // async getOtp(@Req() req: AccountReqDto) {
  //   const account: AdminAccountDocument = req.user;
  //   const resDto: genOtpDtoRes = await this.adminAccountService.generateOtp(
  //     account
  //   );
  //   resDto.status = "ok";
  //   return resDto;
  // }

  // @UseGuards(AuthGuard("local"))
  // @ApiBearerAuth()
  // @Post("/change-pw")
  // @ApiOperation({
  //   summary: "Change account password",
  // })
  // @ApiResponse({
  //   status: 201,
  //   type: HttpResDto,
  // })
  // async cngPw(
  //   @Req() req: AccountReqDto,
  //   @Body() reqDto: cngPwReqDto
  // ): Promise<HttpResDto> {
  //   await this.adminAccountService.cngPwSvc(req.user, reqDto.newPassword);
  //   return { status: "ok" };
  // }
}
