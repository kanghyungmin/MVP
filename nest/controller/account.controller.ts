import { Controller, Get } from "@nestjs/common";

@Controller("/account")
export class AccountController {
  constructor() {}

  @Get()
  getHello(): string {
    return "this.appService.getHello()";
  }
}
