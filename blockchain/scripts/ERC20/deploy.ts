import { ethers } from "hardhat";

async function main() {
  console.log("deploying MyToken contract");
  const ERC20 = await ethers.getContractFactory("Token");
  const erc20 = await ERC20.deploy();

  // erc20.de

  await erc20.deployed();
  console.log(`erc20 contract is deployed to ${erc20.address}`);

  console.log(
    `${await erc20.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
