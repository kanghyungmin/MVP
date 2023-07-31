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
      setupSwagger(app);
      await app.init();
    }

    return app;
  }

  export async function getListener() {
    const app = await getApp();

    const server: http.Server = app.getHttpServer();

    const [listener] = server.listeners("request") as NextApiHandler[];

    return listener;
  }

  function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle("NestJS API Docs")
      .setDescription("NestJS API description")
      .setVersion("1.0.0")
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("api-docs", app, document);
  }
}
