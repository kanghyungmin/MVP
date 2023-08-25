import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./libs/modules/config/config.module";
import { DBconnectionMoudle } from "./libs/modules/db/connection.module";
import { MongooseModule } from "@nestjs/mongoose";
import { DBconnectionService } from "./libs/modules/db/connection.service";
import { Account, AccountSchema } from "./libs/models/account.entity";

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
