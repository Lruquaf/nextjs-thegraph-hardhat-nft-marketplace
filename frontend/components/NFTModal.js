import {useEffect, useState} from "react"
import styles from "../styles/Modal.module.css"
import {Web3Button, useChainId, useContract} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
import NftMarketplace from "../constants/NftMarketplace.json"
import {ethers} from "ethers"
import {notifyAction} from "./Notification"

export default function NFTModal({
    marketplace,
    onClose,
    isOwnedByUser,
    tokenId,
    nftAddress,
    price,
}) {
    const chainId = useChainId()
    const marketplaceAddress =
        CONTRACT_ADDRESSES[chainId] !== undefined
            ? CONTRACT_ADDRESSES[chainId].NftMarketplace
            : undefined
    const marketplaceAbi = NftMarketplace

    const [newPrice, setNewPrice] = useState("")
    // const {contract: marketplace} = useContract(marketplaceAddress)

    const handleAction = (message, type) => {
        notifyAction(message, type)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={onClose}>Close</button>
                <p>Token Address: {nftAddress}</p>
                <p>TokenId: {tokenId}</p>
                {isOwnedByUser ? (
                    <div>
                        <input
                            type="number"
                            name="Price"
                            value={newPrice}
                            defaultValue={0.0}
                            onChange={(e) => setNewPrice(e.target.value)}
                        />{" "}
                        ETH
                        <div className={styles.sellerOptions}>
                            <Web3Button
                                contractAddress={marketplaceAddress}
                                // contractAbi={marketplaceAbi}
                                action={async (contract) => {
                                    const args = [
                                        nftAddress,
                                        tokenId,
                                        ethers.utils.parseEther(
                                            newPrice.toString()
                                        ),
                                    ]
                                    await contract.call("updateListing", args)
                                }}
                                // onSubmit={() => {
                                //     console.log(
                                //         "Here comes a submit notification"
                                //     )
                                // }}
                                onSuccess={() => {
                                    console.log(
                                        "Here comes a success notification"
                                    )
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                    onClose()
                                }}
                                onError={(error) => {
                                    console.log(
                                        "Here comes an error notification: ",
                                        error
                                    )
                                    handleAction("Transaction Failed!", "error")
                                }}
                            >
                                Update Listing
                            </Web3Button>
                            <Web3Button
                                contractAddress={marketplaceAddress}
                                // contractAbi={marketplaceAbi}
                                action={async (contract) => {
                                    const args = [nftAddress, tokenId]
                                    await contract.call("cancelListing", args)
                                }}
                                // onSubmit={() => {
                                //     console.log(
                                //         "Here comes a submit notification"
                                //     )
                                // }}
                                onSuccess={() => {
                                    console.log(
                                        "Here comes a success notification"
                                    )
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                    onClose()
                                }}
                                onError={(error) => {
                                    console.log(
                                        "Here comes an error notification: ",
                                        error
                                    )
                                    handleAction("Transaction Failed!", "error")
                                }}
                            >
                                Cancel Listing
                            </Web3Button>
                        </div>
                    </div>
                ) : (
                    <Web3Button
                        contractAddress={marketplaceAddress}
                        // contractAbi={marketplaceAbi}
                        action={async (contract) => {
                            const args = [nftAddress, tokenId]
                            console.log("Args: ", args)
                            await contract.call("buyItem", args, {
                                value: price.toString(),
                            })
                        }}
                    >
                        Buy NFT
                    </Web3Button>
                )}
            </div>
        </div>
    )
}
