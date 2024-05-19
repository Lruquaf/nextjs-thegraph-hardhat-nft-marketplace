import {useEffect, useState} from "react"
import styles from "../styles/SellNft.module.css"
import {
    useContract,
    useChainId,
    useContractWrite,
    useContractRead,
    ConnectWallet,
    Web3Button,
    useAddress,
} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
import {ethers} from "ethers"
import {notifyAction} from "../components/Notification"

export default function SellNFT() {
    const connectedAddress = useAddress()

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

    const {contract: nftContract, error: nftContractError} =
        useContract(nftContractAddress)

    const {
        data: isApprovedForAll,
        isLoading: approvedForAllIsLoading,
        error: approvedForAllError,
    } = useContractRead(nftContract, "isApprovedForAll", [
        connectedAddress,
        marketplaceAddress,
    ])

    useEffect(() => {}, [nftContractAddress])

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

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

        setIsSubmitted(true)
    }

    const handleAction = (message, type) => {
        notifyAction(message, type)
    }

    return (
        <div className={styles.sellNftContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Sell Your NFT</h2>
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
                                className={styles.inputField}
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
                                className={styles.inputField}
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
                                className={styles.inputField}
                            />
                        </div>
                        <button
                            type="submit"
                            hidden={isSubmitted || isApproved}
                            className={styles.submitButton}
                        >
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
                    (isApprovedForAll ? (
                        <div>
                            <Web3Button
                                contractAddress={marketplaceAddress}
                                action={async (contract) => {
                                    const nftAddress = formData.nftAddress
                                    const tokenId = formData.tokenId
                                    const price = formData.price
                                    // List
                                    console.log("Listing...")
                                    const args = [
                                        nftAddress,
                                        tokenId,
                                        ethers.utils.parseEther(
                                            price.toString()
                                        ),
                                    ]
                                    console.log("Args: ", args)
                                    console.log(
                                        "Marketplace Address: ",
                                        marketplaceAddress
                                    )
                                    await contract.call("listItem", args)
                                    setFormData({
                                        nftAddress: "",
                                        tokenId: "",
                                        price: "",
                                    })
                                    setIsSubmitted(false)
                                    setIsApproved(false)
                                }}
                                isDisabled={
                                    isApprovedForAll ? false : !isApproved
                                }
                                onSuccess={() => {
                                    console.log(
                                        "Here comes a success notification"
                                    )
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                }}
                                onError={(error) => {
                                    console.log(
                                        "Here comes an error notification: ",
                                        error
                                    )
                                    handleAction("Transaction Failed!", "error")
                                }}
                                className={styles.submitButton}
                            >
                                List
                            </Web3Button>
                        </div>
                    ) : (
                        <div>
                            <Web3Button
                                contractAddress={nftContractAddress}
                                action={async (contract) => {
                                    console.log("Approving...")
                                    const args = [marketplaceAddress, true]
                                    console.log(
                                        "NFT Address: ",
                                        nftContractAddress
                                    )
                                    console.log("NFT Contract: ", nftContract)
                                    console.log("Approval Args: ", args)
                                    await contract.call(
                                        "setApprovalForAll",
                                        args
                                    )
                                    console.log("Approved!")
                                    setIsApproved(true)
                                }}
                                isDisabled={!isSubmitted && isApproved}
                                onSuccess={() => {
                                    console.log(
                                        "Here comes a success notification"
                                    )
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                }}
                                onError={(error) => {
                                    console.log(
                                        "Here comes an error notification: ",
                                        error
                                    )
                                    handleAction("Transaction Failed!", "error")
                                }}
                                className={styles.submitButton}
                            >
                                Approve
                            </Web3Button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
