import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export type AccountDocument = Account & Document;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true })
  uid: string;

  @Prop({ requred: false })
  email: string;

  @Prop({ requred: false })
  pw: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
