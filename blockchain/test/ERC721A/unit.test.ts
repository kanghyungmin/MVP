/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

chai.use(solidity);

const name = "Myerc721A";
const symbol = "721A";
const price = 0.001;

describe("Start Example ERC721A test", async () => {
  // contracts
  let exampleERC721A: any;
  //signers
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let addr2: HardhatEthersSigner;

  it("Set data for exampleERC721A test", async () => {
    [owner, addr1, addr2] = await ethers.getSigners(); // get a test address
  });

  describe("Test Example ERC721A Metadata", () => {
    it("Should get correct name, symbol, decimal for the Example ERC721A Contract", async () => {
      const ExampleERC721AFactory = await ethers.getContractFactory(
        "MyERC721A"
      );
      exampleERC721A = await ExampleERC721AFactory.deploy();
      await exampleERC721A.deployed();
      expect(await exampleERC721A.name()).to.equal(name);
      expect(await exampleERC721A.symbol()).to.equal(symbol);
    });
  });

  describe("Test Mint exampleERC721A", () => {
    it("Should  Mint corrrectly for the Example ERC721A Contract", async () => {
      await exampleERC721A.connect(addr1).mint(2, {
        value: ethersType.utils.parseEther((price * 2).toString()),
      });

      expect(
        exampleERC721A
          .connect(addr1)
          .mint(2, { value: ethersType.utils.parseEther("1") })
      ).to.be.revertedWith("MyERC721A : msg.value is not correct");

      expect(await exampleERC721A.totalSupply()).to.equal("2");
      expect(await exampleERC721A.balanceOf(addr1.address)).to.equal("2");
    });
  });

  describe("Test Approval exampleERC721A", () => {
    it("should get approved for the Example ERC721A Contract", async () => {
      expect(await exampleERC721A.connect(addr1).approve(addr2.address, "1"))
        .to.emit(exampleERC721A, "Approval")
        .withArgs(addr1.address, addr2.address, "1");
      expect(await exampleERC721A.getApproved("1")).to.equal(addr2.address);
    });
  });

  describe("Test TransferFrom ExampleERC721A", async () => {
    it("Example ERC721A Contract should have ERC721A token after TransferFrom", async () => {
      expect(
        await exampleERC721A
          .connect(addr2)
          .transferFrom(addr1.address, owner.address, "1")
      )
        .to.emit(exampleERC721A, "Transfer")
        .withArgs(addr1.address, owner.address, "1");
      expect(await exampleERC721A.ownerOf(1)).to.equal(owner.address);
    });
  });
});
