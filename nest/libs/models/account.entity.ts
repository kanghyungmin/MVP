import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { Document, Schema as MongooseSchema } from "mongoose";
import { UserType } from "../enums/userType.enum";

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop({ requred: true })
  email: string;

  @Prop({ requred: true })
  pw: string;

  @IsEnum(UserType)
  @IsNotEmpty()
  @ApiProperty({
    example: UserType.ADMIN,
  })
  type: UserType;

  constructor(partial?: Partial<Account>) {
    if (partial) Object.assign(this, partial);
  }
}

export const AccountSchema = SchemaFactory.createForClass(Account);
