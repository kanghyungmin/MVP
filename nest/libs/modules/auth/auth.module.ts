import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategyService } from "./local.strategy.service";
import { JwtStrategyService } from "./jwt.strategy.service";

import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService } from "../config/config.service";
import { AccountService } from "@/nest/service/account.service";
import { AccountRepository } from "@/nest/repository/accout.repo";
import { Account, AccountSchema } from "../../models/account.entity";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),

    MongooseModule.forFeature(
      [{ name: Account.name, schema: AccountSchema }],
      process.env.ATLAS_MONGO_DBNAME
    ),

    JwtModule.registerAsync({
      // useFactory: async (configService: AppConfigService) => ({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
      }),
      inject: [ConfigService],
    }),
  ],

  providers: [
    AuthService,
    LocalStrategyService,
    JwtStrategyService,
    AccountService,
    AccountRepository,
    ConfigService,
  ],
})
export class AuthModule {}
