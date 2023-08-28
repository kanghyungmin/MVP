import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./libs/modules/config/config.module";
import { DBconnectionMoudle } from "./libs/modules/db/connection.module";
import { MongooseModule } from "@nestjs/mongoose";
import { DBconnectionService } from "./libs/modules/db/connection.service";
import { Account, AccountSchema } from "./libs/models/account.entity";
import { AccountController } from "./controller/account.controller";
import { AccountService } from "./service/account.service";
import { AccountRepository } from "./repository/accout.repo";
import { AuthModule } from "./libs/modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.register({ envPath: ".env" }),
    DBconnectionMoudle,
    // data schema
    MongooseModule.forFeature(
      [{ name: Account.name, schema: AccountSchema }],
      process.env.ATLAS_MONGO_DBNAME
    ),
    //connection
    MongooseModule.forRootAsync({
      connectionName: process.env.ATLAS_MONGO_DBNAME,
      inject: [DBconnectionService],
      useFactory: async (dbSvc: DBconnectionService) => dbSvc.getMongoConfig(),
    }),

    AuthModule,
  ],
  controllers: [AppController, AccountController],
  providers: [AppService, AccountService, AccountRepository],
})
export class AppModule {}
