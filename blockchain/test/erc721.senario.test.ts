/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { expect } from "chai";
import chai from "chai";
import { loadFixture, solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { ethers as ethersType } from "ethers";

chai.use(solidity);

describe("Start Example ERC721 Scenario test", async () => {
  let erc721: any;
  //signers
  let owner: any;
  let addr1: any;
  let addr2: any;
  async function ERC721Fixture() {
    // contracts
    // Contracts are deployed using the first signer/account by default
    [owner, addr1, addr2] = await ethers.getSigners(); // get a test address

    const Erc721 = await ethers.getContractFactory("MyERC721");
    const erc721 = await Erc721.deploy();

    return { erc721, owner, addr1, addr2 };
  }

  it("Should get transfer correctly for the Example ERC721 Contract", async () => {
    const { erc721, owner, addr1, addr2 } = await loadFixture(ERC721Fixture);
    await erc721.mint(addr1.address);
    expect(await erc721.ownerOf(1)).to.equal(addr1.address);
  });

  it("Example ERC721 Contract should burn and mint erc721 token clearly", async () => {
    const { erc721, owner, addr1, addr2 } = await loadFixture(ERC721Fixture);
    await erc721.mint(owner.address);

    expect(await erc721.ownerOf(0)).to.equal(owner.address);
    expect(await erc721.ownerOf(1)).to.equal(addr1.address);
    expect(await erc721.ownerOf(2)).to.equal(owner.address);

    await erc721.burn(2);
    await erc721.burn(0);
    await erc721.mint(addr1.address);
    expect(await erc721.ownerOf(3)).to.equal(addr1.address);
  });

  it("Example ERC721 Contract should burn and mint erc721 token clearly 2", async () => {
    const { erc721, owner, addr1, addr2 } = await loadFixture(ERC721Fixture);
    await erc721.mint(addr1.address); //4
    expect(await erc721.ownerOf(4)).to.equal(addr1.address);
    await erc721.connect(addr1).burn(1);

    await erc721.mint(addr2.address); //5
    expect(await erc721.ownerOf(5)).to.equal(addr2.address);
  });
});
