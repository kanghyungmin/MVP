/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

chai.use(solidity);

describe("Start Example Ownable test", async () => {
  // contracts
  let ownableTest: any;
  //signers
  let owner: any;
  let newOwner: any;

  it("Set data for Ownable test", async () => {
    [owner, newOwner] = await ethers.getSigners(); // get a test address
  });

  describe("Test Example Ownable", () => {
    it("Should deploy Ownable Contract correctly", async () => {
      const OwnableTestFactory = await ethers.getContractFactory("OwnableTest");
      ownableTest = await OwnableTestFactory.deploy();
      await ownableTest.deployed();

      expect(await ownableTest.owner()).to.equal(owner.address);
    });
  });

  describe("Test transferOwnership", () => {
    it("Should  transferOwnership corrrectly for the Example Ownable Contract", async () => {
      expect(await ownableTest.transferOwnership(newOwner.address))
        .to.emit(ownableTest, "OwnershipTransferred")
        .withArgs(owner.address, newOwner.address);
      expect(await ownableTest.owner()).to.equal(newOwner.address);
    });
  });

  describe("Test renounceOwnership", () => {
    it("Should  renounceOwnership corrrectly for the Example Ownable Contract", async () => {
      console.log("newOwner.address", newOwner.address);
      console.log("owner.address", owner.address);
      console.log("ownableTest.owner()", await ownableTest.owner());
      expect(await ownableTest.connect(newOwner).renounceOwnership())
        .to.emit(ownableTest, "OwnershipTransferred")
        .withArgs(newOwner.address, ethersType.constants.AddressZero);
      expect(await ownableTest.owner()).to.equal(
        ethersType.constants.AddressZero
      );
    });
  });
});
