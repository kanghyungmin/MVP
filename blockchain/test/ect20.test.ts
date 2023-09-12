/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { expect } from "chai";
import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";
import { solidity } from "ethereum-waffle";
import chai from "chai";

chai.use(solidity);

const name = "MyToken";
const symbol = "MTK";
const decimals = 18;

function changeToBigInt(amount: number) {
  const answerBigint = ethersType.utils.parseUnits(amount.toString(), decimals);
  return answerBigint;
}

describe("Start Example ERC20 test", async () => {
  //loadFixture
  async function deployTokenFixture() {
    let amount = 100;
    const [owner, addr1, addr2] = await ethers.getSigners(); // get a test address

    const MyToken = await ethers.deployContract("Token");
    await MyToken.deployed();
    return { MyToken, owner, addr1, addr2, amount };
  }

  describe("Test Example Mytoken Metadata", () => {
    it("Should get correct name, symbol, decimal for the Example ERC20 Contract", async () => {
      const { MyToken } = await deployTokenFixture();
      expect(await MyToken.name()).to.equal(name);
      expect(await MyToken.symbol()).to.equal(symbol);
      expect(await MyToken.decimals()).to.equal(decimals);
    });
  });

  describe("Test Transfer MyToken", () => {
    it("Should get correct MetaData for the Example ERC20 Contract", async () => {
      const { MyToken, owner, addr1, addr2, amount } =
        await deployTokenFixture();

      await expect(MyToken.mint(addr1.address, changeToBigInt(amount)))
        .to.emit(MyToken, "Transfer")
        .withArgs(
          ethersType.constants.AddressZero,
          addr1.address,
          changeToBigInt(amount)
        );
      expect(await MyToken.totalSupply()).to.equal(changeToBigInt(amount));
      expect(await MyToken.balanceOf(addr1.address)).to.equal(
        changeToBigInt(amount)
      );
    });
  });

  describe("Test Approval exampleERC20", () => {
    it("should get approved for the Example ERC20 Contract", async () => {
      const { MyToken, owner, addr1, addr2, amount } =
        await deployTokenFixture();

      await expect(MyToken.mint(addr1.address, changeToBigInt(amount)))
        .to.emit(MyToken, "Transfer")
        .withArgs(
          ethersType.constants.AddressZero,
          addr1.address,
          changeToBigInt(amount)
        );

      await expect(
        MyToken.connect(addr1).approve(addr2.address, changeToBigInt(amount))
      )
        .to.emit(MyToken, "Approval")
        .withArgs(addr1.address, addr2.address, changeToBigInt(amount));
      expect(await MyToken.allowance(addr1.address, addr2.address)).to.equal(
        changeToBigInt(amount)
      );
      // console.log(await MyToken.balanceOf(addr1.address));
      // console.log(await MyToken.balanceOf(addr2.address));
    });
  });

  describe("Test TransferFrom MyToken", () => {
    it("Example ERC20 Contract should have erc20 token after TransferFrom", async () => {
      const { MyToken, owner, addr1, addr2, amount } =
        await deployTokenFixture();

      //mint
      await expect(MyToken.mint(addr1.address, changeToBigInt(amount)))
        .to.emit(MyToken, "Transfer")
        .withArgs(
          ethersType.constants.AddressZero,
          addr1.address,
          changeToBigInt(amount)
        );

      //approve
      await expect(
        MyToken.connect(addr1).approve(addr2.address, changeToBigInt(amount))
      )
        .to.emit(MyToken, "Approval")
        .withArgs(addr1.address, addr2.address, changeToBigInt(amount));

      //transferFrom
      await expect(
        MyToken.connect(addr2).transferFrom(
          addr1.address,
          owner.address,
          changeToBigInt(amount)
        )
      )
        .to.emit(MyToken, "Transfer")
        .withArgs(addr1.address, owner.address, changeToBigInt(amount));
      expect(await MyToken.balanceOf(owner.address)).to.equal(
        changeToBigInt(amount)
      );
    });
  });

  describe("Test burn Mytoken", () => {
    it("Example ERC20 Contract should burn erc20 token clearly", async () => {
      const { MyToken, owner, addr1, addr2, amount } =
        await deployTokenFixture();

      //mint
      await expect(MyToken.mint(addr1.address, changeToBigInt(amount)))
        .to.emit(MyToken, "Transfer")
        .withArgs(
          ethersType.constants.AddressZero,
          addr1.address,
          changeToBigInt(amount)
        );

      //approve
      await expect(
        MyToken.connect(addr1).approve(addr2.address, changeToBigInt(amount))
      )
        .to.emit(MyToken, "Approval")
        .withArgs(addr1.address, addr2.address, changeToBigInt(amount));

      //transferFrom
      await expect(
        MyToken.connect(addr2).transferFrom(
          addr1.address,
          owner.address,
          changeToBigInt(amount)
        )
      )
        .to.emit(MyToken, "Transfer")
        .withArgs(addr1.address, owner.address, changeToBigInt(amount));
      //burn
      await expect(MyToken.connect(owner).burn(changeToBigInt(amount)))
        .to.emit(MyToken, "Transfer")
        .withArgs(
          owner.address,
          ethersType.constants.AddressZero,
          changeToBigInt(amount)
        );
      expect(await MyToken.balanceOf(owner.address)).to.equal(0);
    });
  });
});
