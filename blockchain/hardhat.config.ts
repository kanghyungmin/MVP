import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    sepolia: {
      url: `${process.env.ALCHEMY_SEPOLIA_URL}`,
      accounts: [`${process.env.SEPOLIA_PRIVATE_KEY}`], //`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
    // matic: {
    //   url: process.env.RPC_URL_MATIC,
    //   accounts: [process.env.PRIVATE_KEY!, process.env.TEST_PRIVATE_KEY!],
    // },
    // bsc: {
    //   url: process.env.RPC_URL_BSC,
    //   accounts: [process.env.PRIVATE_KEY!, process.env.TEST_PRIVATE_KEY!],
    // },
    // klaytn: {
    //   url: process.env.RPC_URL_KLAYTN,
    //   accounts: [process.env.PRIVATE_KEY!, process.env.TEST_PRIVATE_KEY!],
    // },
  },
  solidity: {
    version: "0.8.13",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200,
    //   },
    // },
  },
  // gasReporter: {
  //   enabled: true,
  //   // currency: "KRW",
  // },
};

export default config;
