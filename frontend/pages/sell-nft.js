import {useEffect, useState} from "react"
import {
    useContract,
    useChainId,
    useContractWrite,
    ConnectWallet,
} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
// import {nftMarketplaceAbi} from "../constants/NftMarketplace.json"
// import medievalGeneralsAbi from "../constants/MedievalGenerals.json"
import {ethers} from "ethers"

export default function SellNFT() {
    // const [nftContractAbi, setNftContractAbi] = useState(null)

    const [formData, setFormData] = useState({
        nftAddress: "",
        tokenId: "",
        price: "",
    })
    const chainId = useChainId()
    const marketplaceAddress =
        CONTRACT_ADDRESSES[chainId] !== undefined
            ? CONTRACT_ADDRESSES[chainId].NftMarketplace
            : undefined
    // const marketplaceAbi = nftMarketplaceAbi
    // const medievalGeneralsAbi = medievalGeneralsAbi

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isApproved, setIsApproved] = useState(false)

    const [nftContractAddress, setNftContractAddress] = useState("")

    const {contract: marketplaceContract, error: marketplaceContractError} =
        useContract(marketplaceAddress)
    const {contract: nftContract, error: nftContractError} =
        useContract(nftContractAddress)

    const {
        mutateAsync: setApprovalForAll,
        isLoading: approvalIsLoading,
        error: approvalError,
    } = useContractWrite(nftContract, "setApprovalForAll")

    const {
        mutateAsync: listItem,
        isLoading: listItemIsLoading,
        error: listItemError,
    } = useContractWrite(marketplaceContract, "listItem")

    useEffect(() => {}, [nftContractAddress])

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // async function getABI(nftAddress) {
    //     try {
    //         // Etherscan API'sinden ABI'yi al
    //         const apiKey = process.env.ETHERSCAN_API_KEY
    //         const response = await fetch(
    //             `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${nftAddress}&apikey=${apiKey}`
    //         )
    //         const data = await response.json()
    //         const fetchedABI = JSON.parse(data.result)
    //         setNftContractAbi(fetchedABI)
    //     } catch (error) {
    //         console.error("Error fetching ABI:", error)
    //     }
    // }

    async function handleSubmit(event) {
        event.preventDefault()

        const nftAddress = formData.nftAddress
        const tokenId = formData.tokenId
        const price = formData.price

        const parsedPrice = ethers.utils.parseEther(price.toString())
        setFormData({
            ...formData,
            [price]: parsedPrice,
        })
        console.log("Form Verileri:", formData)

        setNftContractAddress(nftAddress)

        // await getABI(nftAddress)

        setIsSubmitted(true)
    }

    async function handleApprove() {
        // Approve
        console.log("Approving...")
        const approvalArgs = [marketplaceAddress, true]
        console.log("NFT Address: ", nftContractAddress)
        console.log("NFT Contract: ", nftContract)
        console.log("Approval Args: ", approvalArgs)
        await setApprovalForAll({args: approvalArgs})
        console.log("Approved!")
        setIsApproved(true)
    }
    async function handleList() {
        const nftAddress = formData.nftAddress
        const tokenId = formData.tokenId
        const price = formData.price
        // List
        console.log("Listing...")
        const listingArgs = [
            nftAddress,
            tokenId,
            ethers.utils.parseEther(price.toString()),
        ]
        await listItem({args: listingArgs})
        console.log("Listed!")

        setFormData({
            nftAddress: "",
            tokenId: "",
            price: "",
        })

        setIsSubmitted(false)
        setIsApproved(false)
    }

    return (
        <div>
            <h2>Sell Your NFT</h2>
            {chainId !== undefined ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nftAddress">NFT Address: </label>
                        <input
                            type="text"
                            id="nftAddress"
                            name="nftAddress"
                            value={formData.nftAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="tokenId">Token Id: </label>
                        <input
                            type="text"
                            id="tokenId"
                            name="tokenId"
                            value={formData.tokenId}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price in ETH: </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" hidden={isSubmitted || isApproved}>
                        Sell NFT
                    </button>
                </form>
            ) : (
                <div>
                    Please Connect Your Wallet
                    <ConnectWallet />
                </div>
            )}

            {isSubmitted &&
                (isApproved ? (
                    <div>
                        <button type="button" onClick={handleList}>
                            List
                        </button>
                    </div>
                ) : (
                    <div>
                        <button type="button" onClick={handleApprove}>
                            Approve
                        </button>
                    </div>
                ))}
        </div>
    )
}
