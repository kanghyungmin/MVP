import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

const contractAddress = process.env.GOVERNOR_TOKEN!;
console.log(contractAddress);
async function mint(to: string, amount: number) {
  console.log("mint from MyToken2 contract");
  const Erc20 = await ethers.getContractFactory("MyToken2");
  const erc20 = await Erc20.attach(contractAddress);
  const mint = await erc20.mint(
    to,
    ethersType.utils.parseUnits(amount.toString(), 18)
  );
  console.log("mint :", mint);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const amount = 10000;
mint(process.env.PUBLIC_KEY!, amount).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
