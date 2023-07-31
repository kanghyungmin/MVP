import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/nest/app.module";
import * as http from "http";
import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export module Main {
  let app: INestApplication;

  export async function getApp() {
    if (!app) {
      app = await NestFactory.create(AppModule, { bodyParser: false });
      app.setGlobalPrefix("api");
      await app.init();
      await swaggeerApp();
    }

    return app;
  }

  export async function getListener() {
    const app = await getApp();

    const server: http.Server = app.getHttpServer();
    // console.log(`server=${JSON.stringify(server)}`);
    const [listener] = server.listeners("request") as NextApiHandler[];

    return listener;
  }

  async function swaggeerApp() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle("API")
      .setDescription("The cats API description")
      .setVersion("1.0")
      .addTag("cats")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("apis", app, document);

    await app.listen(3000);
  }
}
