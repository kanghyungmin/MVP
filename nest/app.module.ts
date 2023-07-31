import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./libs/module/config/config.module";
import { DBconnectionMoudle } from "./libs/module/db/connection.module";
import { MongooseModule } from "@nestjs/mongoose";
import { DBconnectionService } from "./libs/module/db/connection.service";
import { Account, AccountSchema } from "./libs/model/account.entity";

@Module({
  imports: [
    ConfigModule.register({ envPath: ".env" }),
    DBconnectionMoudle,
    MongooseModule.forRootAsync({
      connectionName: process.env.REPL_MONGO_DB,
      inject: [DBconnectionService],
      useFactory: async (dbSvc: DBconnectionService) => dbSvc.getMongoConfig(),
    }),
    MongooseModule.forFeature(
      [{ name: Account.name, schema: AccountSchema }],
      process.env.REPL_ADMIN_MONGO_DB
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
