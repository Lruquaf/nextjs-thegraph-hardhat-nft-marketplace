import {useState} from "react"
import styles from "../styles/Modal.module.css"
import {Web3Button, useChainId} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
import {ethers} from "ethers"
import {notifyAction} from "./Notification"

export default function NFTModal({
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

    const [newPrice, setNewPrice] = useState("")

    const handleAction = (message, type) => {
        notifyAction(message, type)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.button}>
                    Close
                </button>
                <p>Token Address: {nftAddress}</p>
                <p>TokenId: {tokenId}</p>
                {isOwnedByUser ? (
                    <div>
                        <input
                            type="number"
                            name="Price"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                        />{" "}
                        ETH
                        <div className={styles.sellerOptions}>
                            <Web3Button
                                contractAddress={marketplaceAddress}
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
                                onSuccess={() => {
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                    onClose()
                                }}
                                onError={(error) => {
                                    handleAction("Transaction Failed!", "error")
                                }}
                            >
                                Update Listing
                            </Web3Button>
                            <Web3Button
                                contractAddress={marketplaceAddress}
                                action={async (contract) => {
                                    const args = [nftAddress, tokenId]
                                    await contract.call("cancelListing", args)
                                }}
                                onSuccess={() => {
                                    handleAction(
                                        "Transaction Submitted!",
                                        "success"
                                    )
                                    onClose()
                                }}
                                onError={(error) => {
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
                        action={async (contract) => {
                            const args = [nftAddress, tokenId]
                            await contract.call("buyItem", args, {
                                value: price.toString(),
                            })
                        }}
                        onSuccess={() => {
                            handleAction("Transaction Submitted!", "success")
                            onClose()
                        }}
                        onError={(error) => {
                            handleAction("Transaction Failed!", "error")
                        }}
                    >
                        Buy NFT
                    </Web3Button>
                )}
            </div>
        </div>
    )
}
