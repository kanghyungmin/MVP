/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Contract } from "ethers";
import { ethers as ethersType } from "ethers";
import { ethers } from "hardhat";

chai.use(solidity);

const decimals = 18;
// const tokenURI = 'https://raw.githubusercontent.com/hyunkicho/blockchain101/main/erc721/metadata/';
function changeToBigInt(amount: number) {
  const answerBigint = ethersType.utils.parseUnits(amount.toString(), decimals);
  return answerBigint;
}

// contracts
// let exampleERC721: any;
let governorToken: any;
let utilityToken: any;
let governor: any;
//signers
let owner: any;
let voter1: any;
let voter2: any;
let voter3: any;
let voter4: any;
let teamAddr: any;
let propoasl1Id: number;
let transferCalldata: string;
const name = "MyNFT";
const symbol = "MNFT";

describe("Start Example ERC721 Governor test", async () => {
  it("Set data for exampleERC721 Governor test", async () => {
    [owner, voter1, voter2, voter3, voter4, teamAddr] =
      await ethers.getSigners(); // get a test address
  });

  describe("Test Example exampleERC721 Governor deployment", () => {
    it("Should get correct name, symbol, decimal for the Example ERC721 Contract", async () => {
      console.log("deploying MyERC20(Governor) contract");
      const ERC20 = await ethers.getContractFactory("Token");
      utilityToken = await ERC20.deploy();
      await utilityToken.deployed();

      console.log("deploying  contract");
      const ERC20Governor = await ethers.getContractFactory("MyToken2");
      governorToken = await ERC20Governor.deploy();
      await governorToken.deployed();

      //   expect(await governorToken.name()).to.equal(name);
      //   expect(await governorToken.symbol()).to.equal(symbol);
      console.log(
        `governorToken contract is deployed to ${governorToken.address}`
      );

      console.log("deploying governance contract");
      const Governor = await ethers.getContractFactory("MyGovernor");
      governor = await Governor.deploy(governorToken.address);
      await governor.deployed();

      // expect(await governor.votingDelay()).to.equal(1);
      // expect(await governor.votingPeriod()).to.equal(20);
      console.log(`governor contract is deployed to ${governor.address}`);
    });

    it("step 01) set proposal action", async () => {
      let currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("proposal currentBlockNumber is : ", currentBlockNumber);
      const erc20Token = await ethers.getContractAt(
        "Token",
        utilityToken.address
      );
      console.log("utilityToken.address : ", utilityToken.address);

      //set Proposal to send token
      let teamAddress = teamAddr.address;
      console.log("team address :", teamAddress);
      const grantAmount = 200;
      await utilityToken.mint(governor.address, changeToBigInt(grantAmount));
      //   console.log(await utilityToken.balanceOf(governor.address));
      transferCalldata = erc20Token.interface.encodeFunctionData("transfer", [
        teamAddress,
        changeToBigInt(grantAmount),
      ]);
      console.log("transferCalldata :", transferCalldata);

      let proporsalId = await governor.callStatic.propose(
        [utilityToken.address],
        [0],
        [transferCalldata],
        "Proposal #1: Give grant to team"
      );
      console.log("proporsalId is : ", proporsalId);
      //proposal을 해시한 값이 아이디로 나오게 된다.
      //값을 미리 받아온 후 실행, 실제로는 이벤트를 불러와서 체크할 수 있다.

      await governor.propose(
        [utilityToken.address],
        [0],
        [transferCalldata],
        "Proposal #1: Give grant to team"
      );
      const stateOfProposal = await governor.state(proporsalId.toString());
      console.log("stateOfProposal is : ", stateOfProposal);
      propoasl1Id = proporsalId;
    });

    it("step 02) check get Votes", async () => {
      const currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber : ", currentBlockNumber);
      expect(
        await governor.getVotes(voter1.address, currentBlockNumber - 1)
      ).to.equal("0");
      expect(
        await governor.getVotes(voter2.address, currentBlockNumber - 1)
      ).to.equal("0");
      expect(
        await governor.getVotes(voter3.address, currentBlockNumber - 1)
      ).to.equal("0");
      expect(
        await governor.getVotes(voter4.address, currentBlockNumber - 1)
      ).to.equal("0");
    });

    it("step 03) get governor Token Mint and check Votes again", async () => {
      console.log("step 01 👉 : mint governor ");
      await governorToken.mint(voter1.address, 1);
      expect(await governorToken.balanceOf(voter1.address)).to.equal("1");
      await governorToken.mint(voter2.address, 1);
      expect(await governorToken.balanceOf(voter2.address)).to.equal("1");
      await governorToken.mint(voter3.address, 1);
      expect(await governorToken.balanceOf(voter3.address)).to.equal("1");
      await governorToken.mint(voter4.address, 1);
      expect(await governorToken.balanceOf(voter4.address)).to.equal("1");

      console.log("step 02 👉 : delgate from governor token ");
      await governorToken.connect(voter1).delegate(voter1.address);
      await governorToken.connect(voter2).delegate(voter2.address);
      await governorToken.connect(voter3).delegate(voter3.address);
      await governorToken.connect(voter4).delegate(voter4.address);

      const currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber : ", currentBlockNumber);

      await ethers.provider.send("evm_mine", []); //mine to start vote
      console.log("step 03 👉 : check getPastVotes from governor Token ");
      expect(
        await governorToken.getPastVotes(voter1.address, currentBlockNumber)
      ).to.equal("1");

      expect(
        await governorToken.getPastVotes(voter2.address, currentBlockNumber)
      ).to.equal("1");
      expect(
        await governorToken.getPastVotes(voter3.address, currentBlockNumber)
      ).to.equal("1");
      expect(
        await governorToken.getPastVotes(voter4.address, currentBlockNumber)
      ).to.equal("1");

      console.log("step 04 👉 : check getVotes from governor ");
      expect(
        await governor.getVotes(voter1.address, currentBlockNumber)
      ).to.equal("1");
      expect(
        await governor.getVotes(voter2.address, currentBlockNumber)
      ).to.equal("1");
      expect(
        await governor.getVotes(voter3.address, currentBlockNumber)
      ).to.equal("1");
      expect(
        await governor.getVotes(voter4.address, currentBlockNumber)
      ).to.equal("1");

      const stateOfProposal = await governor.state(propoasl1Id.toString());
      console.log("stateOfProposal is : ", stateOfProposal);
    });

    it("step 04) castVote action", async () => {
      console.log(
        "proposal snap shot : ",
        await governor.proposalSnapshot(propoasl1Id)
      );
      console.log(
        "proposal deadline : ",
        await governor.proposalDeadline(propoasl1Id)
      );
      let currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber : ", currentBlockNumber);

      await ethers.provider.send("evm_mine", []); //mine to start vote

      currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber : ", currentBlockNumber);

      await governor.connect(voter1).castVote(propoasl1Id.toString(), 1); //1 is FOR 0 is Against

      await governor.connect(voter2).castVote(propoasl1Id.toString(), 1); //1 is FOR 0 is Against

      let hasVoted = await governor.hasVoted(
        propoasl1Id.toString(),
        voter3.address
      );
      console.log("hasVoted is : ", hasVoted);

      await governor.connect(voter3).castVote(propoasl1Id.toString(), 1); //1 is FOR 0 is Against
      hasVoted = await governor.hasVoted(
        propoasl1Id.toString(),
        voter3.address
      );
      console.log("hasVoted is : ", hasVoted);

      await governor.connect(voter4).castVote(propoasl1Id.toString(), 1); //1 is FOR 0 is Against
      hasVoted = await governor.hasVoted(
        propoasl1Id.toString(),
        voter4.address
      );
      console.log("hasVoted is : ", hasVoted);

      const deadline = await governor.proposalDeadline(propoasl1Id.toString());
      console.log("deadline is ", deadline);

      let stateOfProposal = await governor.state(propoasl1Id.toString());
      console.log("stateOfProposal is : ", stateOfProposal);

      currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber is : ", currentBlockNumber);

      await ethers.provider.send("evm_mine", []); //mine to start vote
      await ethers.provider.send("evm_mine", []); //mine to start vote
      await ethers.provider.send("evm_mine", []); //mine to start vote
      await ethers.provider.send("evm_mine", []); //mine to start vote

      currentBlockNumber = await ethers.provider.getBlockNumber();
      console.log("currentBlockNumber is : ", currentBlockNumber);

      const quorum = await governor.quorum(currentBlockNumber);
      console.log("qurom :", quorum);
      stateOfProposal = await governor.state(propoasl1Id.toString());
      console.log("stateOfProposal is : ", stateOfProposal);
      let quorumReached = await governor.quorumReached(propoasl1Id.toString());
      console.log("quorumReached is : ", quorumReached);
      let proposalVotes = await governor.proposalVotes(propoasl1Id.toString());
      console.log("proposalVotes is : ", proposalVotes);
      let voteSucceeded = await governor.voteSucceeded(propoasl1Id.toString());
      console.log("voteSucceeded is : ", voteSucceeded);

      // await ethers.provider.send("evm_mine", []); //mine to start vote
      // await ethers.provider.send("evm_mine", []); //mine to start vote
      const descriptionHash = ethersType.utils.id(
        "Proposal #1: Give grant to team"
      );
      console.log(await utilityToken.balanceOf(teamAddr.address));
      await governor.execute(
        [utilityToken.address],
        [0],
        [transferCalldata],
        descriptionHash
      );
      console.log(await utilityToken.balanceOf(teamAddr.address));
      // console.log("-------");
      // console.log(utilityToken.balanceOf(utilityToken.address));
      // console.log("-------");
    });
  });
});
