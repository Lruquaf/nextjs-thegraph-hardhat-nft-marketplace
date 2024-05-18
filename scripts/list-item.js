const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const chainId = network.config.chainId
    const seller = (await getNamedAccounts()).wl1
    const tokenId = "0"
    const price = networkConfig[chainId].tokenPrice
    const nftCollection = await ethers.getContract("MedievalGenerals", seller)
    const nftMarketplace = await ethers.getContract("NftMarketplace", seller)

    let listing = await nftMarketplace.getListing(
        await nftCollection.getAddress(),
        tokenId
    )
    console.log(
        `Initial listing info: ${ethers
            .formatEther(listing.price)
            .toString()} ETH from ${listing.seller.toString()}`
    )
    console.log(
        "Initial owner: ",
        (await nftCollection.ownerOf(tokenId)).toString()
    )

    let tx = await nftCollection.setApprovalForAll(
        await nftMarketplace.getAddress(),
        true
    )
    await tx.wait(1)

    tx = await nftMarketplace.listItem(
        await nftCollection.getAddress(),
        tokenId,
        price
    )
    await tx.wait(1)

    listing = await nftMarketplace.getListing(
        await nftCollection.getAddress(),
        tokenId
    )
    console.log(
        `Recent listing info: ${ethers
            .formatEther(listing.price)
            .toString()} ETH from ${listing.seller.toString()}`
    )
    console.log(
        "Recent owner: ",
        (await nftCollection.ownerOf(tokenId)).toString()
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
