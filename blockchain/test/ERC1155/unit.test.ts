/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

chai.use(solidity);

describe("Start Example ERC1155 test", async () => {
  // contracts
  let erc1155: any;
  //signers
  let owner: any;
  let addr1: any;
  let addr2: any;

  it("Set data for erc1155 test", async () => {
    [owner, addr1, addr2] = await ethers.getSigners(); // get a test address
  });

  describe("Test Example ERC1155 Metadata", () => {
    it("Should deploy ERC1155 Contract correctly", async () => {
      const ExampleERC1155Factory = await ethers.getContractFactory(
        "MyERC1155"
      );
      erc1155 = await ExampleERC1155Factory.deploy();
      await erc1155.deployed();
    });
  });

  describe("Test Mint erc1155", () => {
    it("Should  Mint corrrectly for the Example ERC1155 Contract", async () => {
      expect(await erc1155.mint(addr1.address, 1, 10, "0x"))
        .to.emit(erc1155, "TransferSingle")
        .withArgs(
          owner.address,
          ethersType.constants.AddressZero,
          addr1.address,
          1,
          10
        );
      expect(await erc1155.balanceOf(addr1.address, 1)).to.equal("10");
    });
  });

  describe("Test setApprovalForAll erc1155", () => {
    it("should get setApprovalForAll for the Example ERC1155 Contract", async () => {
      expect(await erc1155.setApprovalForAll(addr2.address, true))
        .to.emit(erc1155, "ApprovalForAll")
        .withArgs(owner.address, addr2.address, true);
      expect(await erc1155.isApprovedForAll(owner.address, addr2.address)).to.be
        .true;
    });
  });

  describe("Test safeTransferFrom ExampleERC1155", async () => {
    it("Example ERC1155 Contract should have erc1155 token after safeTransferFrom", async () => {
      expect(
        await erc1155
          .connect(addr2)
          .safeTransferFrom(owner.address, addr1.address, 0, 5, "0x")
      )
        .to.emit(erc1155, "TransferSingle")
        .withArgs(addr2.address, owner.address, addr1.address, "0", "5");
      expect(await erc1155.balanceOf(addr1.address, 0)).to.equal("5");
    });
  });
});
