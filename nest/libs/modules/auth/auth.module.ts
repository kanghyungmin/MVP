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
import { DBconnectionService } from "../db/connection.service";
import { DBconnectionMoudle } from "../db/connection.module";
import { ConfigModule } from "../config/config.module";
import { Account, AccountSchema } from "../../models/account.entity";

@Module({
  imports: [
    ConfigModule.register({ envPath: ".env" }),
    PassportModule.register({ defaultStrategy: "jwt" }),
    // DBconnectionMoudle,
    // //connection
    // MongooseModule.forRootAsync({
    //   connectionName: process.env.ATLAS_MONGO_DBNAME,
    //   inject: [DBconnectionService],
    //   useFactory: async (dbSvc: DBconnectionService) => dbSvc.getMongoConfig(),
    // }),
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
    {
      provide: "CONFIG_OPTIONS",
      useValue: { envPath: ".env" },
    },
    AuthService,
    LocalStrategyService,
    JwtStrategyService,
    AccountService,
    AccountRepository,
    ConfigService,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
