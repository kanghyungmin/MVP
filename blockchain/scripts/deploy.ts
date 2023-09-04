// import { ethers } from "@typechain/hardhat";
import { ethers } from "hardhat";

async function main() {
  console.log("deploying MyERC20 contract");
  const ERC20 = await ethers.getContractFactory("MyToken");
  const erc20 = await ERC20.deploy();
  await erc20.deployed();

  console.log(`erc20 contract is deployed to ${erc20.address}`);
  console.log("deploying MyERC721 contract");
  console.log(
    `${await erc20.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
