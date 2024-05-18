const {
    frontendAbiLocation,
    frontendAddressLocation,
} = require("../helper-hardhat-config")
const {ethers, network} = require("hardhat")
const fs = require("fs")

module.exports = async () => {
    console.log("Updating frontend...")
    await updateAbis()
    await updateAddresses()
    console.log("Frontend updated!")
}

async function updateAbis() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    fs.writeFileSync(
        `${frontendAbiLocation}NftMarketplace.json`,
        JSON.stringify(nftMarketplace.interface.fragments)
    )

    const medievalGenerals = await ethers.getContract("MedievalGenerals")
    fs.writeFileSync(
        `${frontendAbiLocation}MedievalGenerals.json`,
        JSON.stringify(medievalGenerals.interface.fragments)
    )

    const calradianClubs = await ethers.getContract("CalradianClubs")
    fs.writeFileSync(
        `${frontendAbiLocation}CalradianClubs.json`,
        JSON.stringify(calradianClubs.interface.fragments)
    )
}

async function updateAddresses() {
    const chainId = network.config.chainId
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const medievalGenerals = await ethers.getContract("MedievalGenerals")
    const calradianClubs = await ethers.getContract("CalradianClubs")

    const contractAddresses = JSON.parse(
        fs.readFileSync(frontendAddressLocation, "utf8")
    )

    if (chainId in contractAddresses) {
        contractAddresses[chainId]["NftMarketplace"] =
            await nftMarketplace.getAddress()
        contractAddresses[chainId]["MedievalGenerals"] =
            await medievalGenerals.getAddress()
        contractAddresses[chainId]["CalradianClubs"] =
            await calradianClubs.getAddress()
    } else {
        contractAddresses[chainId] = {
            NftMarketplace: await nftMarketplace.getAddress(),
            MedievalGenerals: await medievalGenerals.getAddress(),
            CalradianClubs: await calradianClubs.getAddress(),
        }
    }
    fs.writeFileSync(frontendAddressLocation, JSON.stringify(contractAddresses))
}

module.exports.tags = ["all", "frontend"]
