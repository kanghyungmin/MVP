import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

const contractAddress = process.env.ERC20!;
console.log(contractAddress);
async function getBalance(address: string) {
  console.log("Owner Balance");
  const Erc20 = await ethers.getContractFactory("Token");
  const erc20 = await Erc20.attach(contractAddress);
  const balance = await erc20.balanceOf(address);

  console.log("balance :", balance);
}

getBalance(process.env.PUBLIC_KEY!).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
