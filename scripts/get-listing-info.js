const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const chainId = network.config.chainId
    const seller = (await getNamedAccounts()).wl1
    const tokenId = "0"
    const price = networkConfig[chainId].tokenPrice
    const nftCollection = await ethers.getContract("MedievalGenerals")
    const nftMarketplace = await ethers.getContract("NftMarketplace")

    const totalSupply = await nftCollection.getTokenCounter()

    for (let i = 0; i < totalSupply; i++) {
        let listing = await nftMarketplace.getListing(
            await nftCollection.getAddress(),
            i
        )
        console.log(
            `TokenId #${i} Current listing info: ${ethers
                .formatEther(listing.price)
                .toString()} ETH from ${listing.seller.toString()}`
        )
        console.log(
            `TokenId #${i} Current owner: `,
            (await nftCollection.ownerOf(i)).toString()
        )
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
