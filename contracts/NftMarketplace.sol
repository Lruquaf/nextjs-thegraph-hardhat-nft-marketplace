// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error NftMarketplace__NotOwner();
error NftMarketplace__NotSeller();
error NftMarketplace__InvalidPrice();
error NftMarketplace__NotApprovedForMarketplace();
error NftMarketplace__NotEnoughETH(
    address nftAddress,
    uint256 tokenId,
    uint256 price
);
error NftMarketplace__NoProceeds();
error NftMarketplace__TransferFailed();

contract NftMarketplace {
    struct Listing {
        address seller;
        uint256 price;
    }

    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );
    event ItemBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    event ListingCancelled(
        address indexed seller,
        address indexed nftAddress,
        uint256 tokenId
    );

    mapping(address nftAddress => mapping(uint256 tokenId => Listing listing))
        private listings;
    mapping(address seller => uint256 proceeds) private proceeds;

    modifier isOwner(address _nftAddress, uint256 _tokenId) {
        IERC721 _nftContract = IERC721(_nftAddress);
        if (msg.sender != _nftContract.ownerOf(_tokenId)) {
            revert NftMarketplace__NotOwner();
        }
        _;
    }
    modifier isSeller(address _nftAddress, uint256 _tokenId) {
        IERC721 _nftContract = IERC721(_nftAddress);
        if (msg.sender != listings[_nftAddress][_tokenId].seller) {
            revert NftMarketplace__NotSeller();
        }
        _;
    }

    function listItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _price
    ) external isOwner(_nftAddress, _tokenId) {
        if (_price <= 0) {
            revert NftMarketplace__InvalidPrice();
        }
        IERC721 _nftContract = IERC721(_nftAddress);
        if (!_nftContract.isApprovedForAll(msg.sender, address(this))) {
            revert NftMarketplace__NotApprovedForMarketplace();
        }
        listings[_nftAddress][_tokenId] = Listing(msg.sender, _price);
        _nftContract.transferFrom(msg.sender, address(this), _tokenId);
        emit ItemListed(msg.sender, _nftAddress, _tokenId, _price);
    }

    function buyItem(address _nftAddress, uint256 _tokenId) external payable {
        Listing memory _listedItem = listings[_nftAddress][_tokenId];
        if (msg.value < _listedItem.price) {
            revert NftMarketplace__NotEnoughETH(
                _nftAddress,
                _tokenId,
                _listedItem.price
            );
        }
        IERC721 _nftContract = IERC721(_nftAddress);
        proceeds[_listedItem.seller] += msg.value;
        delete listings[_nftAddress][_tokenId];
        _nftContract.transferFrom(address(this), msg.sender, _tokenId);
        emit ItemBought(msg.sender, _nftAddress, _tokenId, _listedItem.price);
    }

    function cancelListing(
        address _nftAddress,
        uint256 _tokenId
    ) external isSeller(_nftAddress, _tokenId) {
        IERC721 _nftContract = IERC721(_nftAddress);
        delete listings[_nftAddress][_tokenId];
        _nftContract.transferFrom(address(this), msg.sender, _tokenId);
        emit ListingCancelled(msg.sender, _nftAddress, _tokenId);
    }

    function updateListing(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _newPrice
    ) external isSeller(_nftAddress, _tokenId) {
        listings[_nftAddress][_tokenId].price = _newPrice;
        emit ItemListed(msg.sender, _nftAddress, _tokenId, _newPrice);
    }

    function withdrawProceeds() external {
        uint256 _proceeds = proceeds[msg.sender];
        if (_proceeds <= 0) {
            revert NftMarketplace__NoProceeds();
        }
        proceeds[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: _proceeds}("");
        if (!success) {
            revert NftMarketplace__TransferFailed();
        }
    }

    function getListing(
        address _nftAddress,
        uint256 _tokenId
    ) external view returns (Listing memory) {
        return listings[_nftAddress][_tokenId];
    }

    function getProceeds(address _seller) external view returns (uint256) {
        return proceeds[_seller];
    }
}
