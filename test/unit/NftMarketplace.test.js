const {assert, expect} = require("chai")
const {
    developmentChains,
    networkConfig,
} = require("../../helper-hardhat-config")
const {network, getNamedAccounts, ethers, deployments} = require("hardhat")
const {
    ContractFunctionVisibility,
} = require("hardhat/internal/hardhat-network/stack-traces/model")
const {ZeroAddress} = require("ethers")

// !developmentChains.includes(network.name) ? describe.skip :

describe("NftMarketplace", async function () {
    let nftMarketplace, medievalGenerals, calradianClubs
    let user1ConnectedMarketplace, user1ConnectedMG, user1ConnectedCC
    let deployer, user1, user2, user3
    let chainId
    const price = ethers.parseEther("0.1")
    const newPrice = ethers.parseEther("0.2")
    const zeroPrice = "0"
    const tokenId = "0"

    beforeEach(async function () {
        chainId = network.config.chainId
        deployer = (await getNamedAccounts()).deployer
        user1 = (await getNamedAccounts()).user1
        user2 = (await getNamedAccounts()).user2
        user3 = (await getNamedAccounts()).user3
        await deployments.fixture(["all"])
        nftMarketplace = await ethers.getContract("NftMarketplace", deployer)
        medievalGenerals = await ethers.getContract(
            "MedievalGenerals",
            deployer
        )
        calradianClubs = await ethers.getContract("CalradianClubs", deployer)
        user1ConnectedMarketplace = await ethers.getContract(
            "NftMarketplace",
            user1
        )
        user1ConnectedMG = await ethers.getContract("MedievalGenerals", user1)
        user1ConnectedCC = await ethers.getContract("CalradianClubs", user1)

        let tx = await medievalGenerals.mintNft()
        await tx.wait(1)
        tx = await user1ConnectedMG.mintNft()
        await tx.wait(1)
        tx = await calradianClubs.mintNft()
        await tx.wait(1)
        tx = await user1ConnectedCC.mintNft()
        await tx.wait(1)
    })

    describe("listItem", async function () {
        beforeEach(async function () {
            let tx = await medievalGenerals.setApprovalForAll(
                nftMarketplace,
                true
            )
            await tx.wait(1)
        })
        it("fails if caller is not the owner of token", async function () {
            await expect(
                user1ConnectedMarketplace.listItem(
                    medievalGenerals,
                    tokenId,
                    price
                )
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__NotOwner"
            )
        })
        // it("fails if token was already listed", async function () {
        //     let tx = await nftMarketplace.listItem(medievalGenerals, tokenId, price)
        //     await tx.wait(1)
        //     await expect(
        //         nftMarketplace.listItem(medievalGenerals, tokenId, price)
        //     ).to.be.revertedWithCustomError(
        //         nftMarketplace,
        //         "NftMarketplace__AlreadyListed"
        //     )
        // })
        it("fails if price is not above zero", async function () {
            await expect(
                nftMarketplace.listItem(medievalGenerals, tokenId, zeroPrice)
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__InvalidPrice"
            )
        })
        it("fails if marketplace has no approval for the token", async function () {
            await expect(
                nftMarketplace.listItem(calradianClubs, tokenId, price)
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__NotApprovedForMarketplace"
            )
        })
        it("lists the token properly", async function () {
            let tx = await nftMarketplace.listItem(
                medievalGenerals,
                tokenId,
                price
            )
            await tx.wait(1)
            const listing = await nftMarketplace.getListing(
                medievalGenerals,
                tokenId
            )
            assert.equal(listing[0].toString(), deployer)
            assert.equal(listing[1].toString(), price)
            assert.equal(
                (await medievalGenerals.ownerOf(tokenId)).toString(),
                await nftMarketplace.getAddress()
            )
        })
        it("emits the event with args", async function () {
            await expect(
                nftMarketplace.listItem(medievalGenerals, tokenId, price)
            )
                .to.emit(nftMarketplace, "ItemListed")
                .withArgs(
                    deployer,
                    await medievalGenerals.getAddress(),
                    tokenId,
                    price
                )
        })
    })
    describe("buyItem", async function () {
        beforeEach(async function () {
            let tx = await medievalGenerals.setApprovalForAll(
                nftMarketplace,
                true
            )
            await tx.wait(1)
            tx = await nftMarketplace.listItem(medievalGenerals, tokenId, price)
            await tx.wait(1)
        })
        it("fails if price is under listing price", async function () {
            await expect(
                user1ConnectedMarketplace.buyItem(medievalGenerals, tokenId, {
                    value: ethers.parseEther("0.05"),
                })
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__NotEnoughETH"
            )
        })
        it("buys the token properly", async function () {
            let tx = await user1ConnectedMarketplace.buyItem(
                medievalGenerals,
                tokenId,
                {value: price}
            )
            await tx.wait(1)

            const sellerProceeds = await nftMarketplace.getProceeds(deployer)
            assert.equal(sellerProceeds, price)
            const listing = await nftMarketplace.getListing(
                medievalGenerals,
                tokenId
            )
            assert.equal(listing.price, zeroPrice)
            assert.equal(listing.seller, ZeroAddress)
            assert.equal(await medievalGenerals.ownerOf(tokenId), user1)
        })
        it("emits the event with args", async function () {
            await expect(
                user1ConnectedMarketplace.buyItem(medievalGenerals, tokenId, {
                    value: price,
                })
            )
                .to.emit(nftMarketplace, "ItemBought")
                .withArgs(
                    user1,
                    await medievalGenerals.getAddress(),
                    tokenId,
                    price
                )
        })
    })
    describe("updateListing", async function () {
        beforeEach(async function () {
            let tx = await medievalGenerals.setApprovalForAll(
                nftMarketplace,
                true
            )
            await tx.wait(1)
            tx = await nftMarketplace.listItem(medievalGenerals, tokenId, price)
            await tx.wait(1)
        })
        it("fails if caller is not seller", async function () {
            await expect(
                user1ConnectedMarketplace.updateListing(
                    medievalGenerals,
                    tokenId,
                    newPrice
                )
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__NotSeller"
            )
        })
        it("updates the listing properly", async function () {
            let tx = await nftMarketplace.updateListing(
                medievalGenerals,
                tokenId,
                newPrice
            )
            await tx.wait(1)
            const listing = await nftMarketplace.getListing(
                medievalGenerals,
                tokenId
            )
            assert.equal(listing.price, newPrice)
        })
        it("emits the event with args", async function () {
            await expect(
                nftMarketplace.updateListing(
                    medievalGenerals,
                    tokenId,
                    newPrice
                )
            )
                .to.emit(nftMarketplace, "ItemListed")
                .withArgs(
                    deployer,
                    await medievalGenerals.getAddress(),
                    tokenId,
                    newPrice
                )
        })
    })
    describe("cancelListing", async function () {
        beforeEach(async function () {
            let tx = await medievalGenerals.setApprovalForAll(
                nftMarketplace,
                true
            )
            await tx.wait(1)
            tx = await nftMarketplace.listItem(medievalGenerals, tokenId, price)
            await tx.wait(1)
        })
        it("fails if caller is not seller", async function () {
            await expect(
                user1ConnectedMarketplace.cancelListing(
                    medievalGenerals,
                    tokenId
                )
            ).to.be.revertedWithCustomError(
                nftMarketplace,
                "NftMarketplace__NotSeller"
            )
        })
        it("cancels the listing properly", async function () {
            let tx = await nftMarketplace.cancelListing(
                medievalGenerals,
                tokenId
            )
            await tx.wait(1)
            const listing = await nftMarketplace.getListing(
                medievalGenerals,
                tokenId
            )
            assert.equal(listing.price, zeroPrice)
            assert.equal(listing.seller, ZeroAddress)
            assert.equal(await medievalGenerals.ownerOf(tokenId), deployer)
        })
        it("emits the event with args", async function () {
            await expect(
                nftMarketplace.cancelListing(medievalGenerals, tokenId)
            )
                .to.emit(nftMarketplace, "ListingCancelled")
                .withArgs(
                    deployer,
                    await medievalGenerals.getAddress(),
                    tokenId
                )
        })
    })
    describe("withdrawProceeds", async function () {
        beforeEach(async function () {
            let tx = await medievalGenerals.setApprovalForAll(
                nftMarketplace,
                true
            )
            await tx.wait(1)
            tx = await nftMarketplace.listItem(medievalGenerals, tokenId, price)
            await tx.wait(1)
            tx = await user1ConnectedMarketplace.buyItem(
                medievalGenerals,
                tokenId,
                {
                    value: price,
                }
            )
            await tx.wait(1)
        })
        it("withdraws the proceeds properly", async function () {
            const startingContractBalance = (
                await ethers.provider.getBalance(
                    await nftMarketplace.getAddress()
                )
            ).toString()
            console.log(await nftMarketplace.getProceeds(deployer))
            const startingDeployerBalance = await ethers.provider.getBalance(
                deployer
            )
            let tx = await nftMarketplace.withdrawProceeds()
            const txReceipt = await tx.wait(1)
            const feePaid = txReceipt.gasUsed * txReceipt.gasPrice
            const endingContractBalance = (
                await ethers.provider.getBalance(
                    await nftMarketplace.getAddress()
                )
            ).toString()
            const endingDeployerBalance = await ethers.provider.getBalance(
                deployer
            )
            assert.equal(
                endingContractBalance,
                startingContractBalance - price.toString()
            )
            assert.equal(
                endingDeployerBalance,
                startingDeployerBalance + price - feePaid
            )
            assert.equal(await nftMarketplace.getProceeds(deployer), "0")
        })
    })
    describe("end-to-end", async function () {})
})
