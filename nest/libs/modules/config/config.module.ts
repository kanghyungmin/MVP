import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Global()
@Module({})
export class ConfigModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTIONS",
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
