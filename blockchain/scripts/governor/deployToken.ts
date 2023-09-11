import { ethers } from "hardhat";

async function main() {
  console.log("deploying MyToken contract");
  const ERC20 = await ethers.getContractFactory("MyToken2");
  const erc20 = await ERC20.deploy();

  //
  await erc20.deployed();
  console.log(`erc20 contract is deployed to ${erc20.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
