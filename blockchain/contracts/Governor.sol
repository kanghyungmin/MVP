// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";

contract MyGovernor is Governor, GovernorCountingSimple, GovernorVotes  {
    constructor(IVotes _token)
        Governor("MyGovernor")
        GovernorVotes(_token)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 9; // 1 block
    }

    function votingPeriod() public pure override returns (uint256) {
        return 5; // 1 day
    }
  
    function proposalThreshold() public pure override returns (uint256) {
        return 0;
    }
    function quorum(uint256 blockNumber) public view virtual override returns (uint256) {
        //quorum quantity
        return 3;
    }

    // The following functions are overrides required by Solidity.
    // function quorum(uint256 blockNumber)
    //     public
    //     view
    //     override(IGovernor, GovernorVotesQuorumFraction)
    //     returns (uint256)
    // {
    //     return super.quorum(blockNumber);
    // }
    function quorumReached(uint256 proposalId) public view returns (bool){
        return _quorumReached(proposalId);
    }

    function voteSucceeded(uint256 proposalId) public view returns (bool){
        return _voteSucceeded(proposalId);
    }
}