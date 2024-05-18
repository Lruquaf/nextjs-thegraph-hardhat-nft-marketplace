// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CalradianClubs is ERC721URIStorage {
    uint256 private tokenCounter;

    enum General {
        KHERGIT,
        NORD,
        RHODOK,
        SARRANID,
        SWADIA,
        VAEGIR
    }

    string[] public tokenUris;

    constructor(string[6] memory _tokenUris) ERC721("CalradianClubs", "CC") {
        tokenCounter = 0;
        tokenUris = _tokenUris;
    }

    function mintNft() public {
        uint256 randomIndex = uint256(
            keccak256(
                abi.encodePacked(
                    tokenCounter,
                    block.timestamp,
                    block.prevrandao,
                    block.number,
                    msg.sender
                )
            )
        ) % 6;
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, tokenUris[randomIndex]);
        tokenCounter = tokenCounter + 1;
    }

    function getTokenCounter() public view returns (uint256) {
        return tokenCounter;
    }
}
