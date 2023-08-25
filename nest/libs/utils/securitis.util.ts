import { Injectable } from "@nestjs/common";

const EncryptRsa = require("encrypt-rsa").default;

@Injectable()
export class SecuritisUtil {
  private encrypttRSAins = new EncryptRsa();
  private readonly mPublicKey: string | undefined = process.env.RSA_PUBLIC_KEY;
  private readonly mPrivateKey: string | undefined =
    process.env.RSA_PRIVATE_KEY;

  public encryptText(text: string): string {
    return this.encrypttRSAins.encryptStringWithRsaPublicKey({
      text,
      publicKey: this.mPublicKey,
    });
  }

  decryptText(text: string): string {
    return this.encrypttRSAins.decryptStringWithRsaPrivateKey({
      text,
      privateKey: this.mPrivateKey,
    });
  }
}
