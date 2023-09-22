/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { expect } from "chai";

import chai from "chai";
import { solidity } from "ethereum-waffle";

import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

chai.use(solidity);

describe("Start Example AccessControl test", async () => {
  // contracts
  let accessControl: any;
  //signers
  let owner: any;
  let newRole: any;

  it("Set data for AccessControl test", async () => {
    [owner, newRole] = await ethers.getSigners(); // get a test address
    console.log(`${ethersType.utils.getAddress(owner.address)} is owner`);
  });

  describe("Test AccessControl", () => {
    it("Should deploy Ownable Contract correctly", async () => {
      const AccessControlTestFactory = await ethers.getContractFactory(
        "AccessControlTest"
      );
      accessControl = await AccessControlTestFactory.deploy();
      await accessControl.deployed();
    });
  });

  describe("Test hasRole", () => {
    it("Should  transferOwnership corrrectly for the Example Ownable Contract", async () => {
      const isAdmin = await accessControl.hasRole(
        await accessControl.DEFAULT_ADMIN_ROLE(),
        owner.address
      );
      expect(isAdmin).to.be.true;
    });
  });

  describe("Test set more rule", () => {
    it("Should  set more rule corrrectly for the Example Ownable Contract", async () => {
      const NEW_ROLE = ethersType.utils.id("NEW_ROLE");
      await accessControl.grantRole(NEW_ROLE, newRole.address);
      expect(await accessControl.hasRole(NEW_ROLE, newRole.address)).to.be.true;
    });
  });
});
