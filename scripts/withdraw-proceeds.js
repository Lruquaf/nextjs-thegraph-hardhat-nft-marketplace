const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const chainId = network.config.chainId
    const seller = (await getNamedAccounts()).deployer
    const nftMarketplace = await ethers.getContract("NftMarketplace", seller)

    let proceeds = await nftMarketplace.getProceeds(seller)
    console.log("Initial proceeds amount: ", proceeds.toString())

    tx = await nftMarketplace.withdrawProceeds()
    await tx.wait(1)

    proceeds = await nftMarketplace.getProceeds(seller)
    console.log("Recent proceeds amount: ", proceeds.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
