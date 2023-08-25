import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserType } from "../enums/userType.enum";

export class RegisterAccountDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: "hyungmin.kang@hybnomic.com",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "1234",
  })
  password: string;
}

export class ChangeRolesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "hyungmin.kang@hybnomic.com",
  })
  email: string;

  @IsEnum(UserType)
  @IsNotEmpty()
  @ApiProperty({
    example: UserType.GENERAL,
  })
  newRole: UserType;
}
