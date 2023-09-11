import { config as dotEnvConfig } from "dotenv";
import { ethers } from "hardhat";
dotEnvConfig();

async function main() {
  // Grab the contract factory
  const MyGovernor = await ethers.getContractFactory("MyGovernor");

  // Start deployment, returning a promise that resolves to a contract object
  // Instance of the contract taking token contract address as input
  const myGovernor = await MyGovernor.deploy(process.env.GOVERNOR_TOKEN);
  console.log("Contract deployed to address:", myGovernor.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
