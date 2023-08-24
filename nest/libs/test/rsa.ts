//rsa
const EncryptRsa = require("encrypt-rsa").default;

// gen Keys
const encryptRsa = new EncryptRsa();
const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();
console.log(`privateKey: ${privateKey}, publicKey: ${publicKey}`);

// encrypt
const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
  text: "hello world",
  publicKey,
});
console.log(encryptedText);

// decrypt
const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
  text: encryptedText,
  privateKey,
});
console.log(decryptedText);
