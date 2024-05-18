const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const chainId = network.config.chainId
    const buyer = (await getNamedAccounts()).deployer
    const tokenId = "0"
    const price = networkConfig[chainId].tokenPrice
    const nftCollection = await ethers.getContract("MedievalGenerals", buyer)
    const nftMarketplace = await ethers.getContract("NftMarketplace", buyer)

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

    tx = await nftMarketplace.buyItem(
        await nftCollection.getAddress(),
        tokenId,
        {value: price}
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
