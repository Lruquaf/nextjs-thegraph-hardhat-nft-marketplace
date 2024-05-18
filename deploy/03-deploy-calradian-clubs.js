const {network} = require("hardhat")
const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    const tokenUris = networkConfig[chainId].CCUris

    console.log("Deploying NFT collection...")

    const calradianClubs = await deploy("CalradianClubs", {
        from: deployer,
        args: [tokenUris],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(calradianClubs.address, [tokenUris])
    }
    console.log("Token contract was deployed!")
}

module.exports.tags = ["all", "calradianClubs"]
