import { ApiProperty } from "@nestjs/swagger";
import { ErrorType } from "../enums/errorType";

export class HttpResDto {
  @ApiProperty({
    example: "ok",
  })
  status?: string;
  code?: number | ErrorType;
  message?: string;
}
