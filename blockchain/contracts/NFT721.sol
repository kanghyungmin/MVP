// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract MyERC721 is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("MyNFT3", "MNFT3", "https://raw.githubusercontent.com/kanghyungmin/MVP/accountFunc/blockchain/scripts/NFT721/metadata/") {
        mint(msg.sender);
    }
}
