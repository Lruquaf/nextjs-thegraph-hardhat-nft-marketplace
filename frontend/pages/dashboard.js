import { useEffect, useState } from "react"
import styles from "../styles/Dashboard.module.css"
import {
    Web3Button,
    useAddress,
    useChainId,
    useContract,
    useContractRead,
} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
import { ethers } from "ethers"
import { notifyAction } from "../components/Notification"

export default function Dashboard() {
    const chainId = useChainId()
    const address = useAddress()
    const marketplaceAddress =
        CONTRACT_ADDRESSES[chainId] !== undefined
            ? CONTRACT_ADDRESSES[chainId].NftMarketplace
            : undefined

    const { contract: nftMarketplace, error: nftContractError } =
        useContract(marketplaceAddress)

    const { data: proceeds, isLoading: proceedsIsLoading } = useContractRead(
        nftMarketplace,
        "getProceeds",
        [address]
    )

    const handleAction = (message, type) => {
        notifyAction(message, type)
    }

    useEffect(() => { }, [proceeds])
    return (
        <div className={styles.pageContainer}>
            <div className={styles.dashboardContainer}>
                <h1 className={styles.dashboardTitle}>Your Dashboard</h1>
                <h2>Your Proceeds</h2>
                <div className={styles.proceedsContainer}>
                    {proceedsIsLoading ? (
                        <div className={styles.loadingText}>Loading...</div>
                    ) : (
                        <div>
                            <div className={styles.balanceText}>
                                Your Balance: {ethers.utils.formatEther(proceeds)} ETH
                            </div>
                            <Web3Button
                                contractAddress={marketplaceAddress}
                                action={async (contract) => {
                                    await contract.call("withdrawProceeds")
                                }}
                                onSuccess={() => {
                                    handleAction("Transaction Submitted", "success")
                                }}
                                onError={(error) => {
                                    console.log(error)
                                    handleAction("Transaction Failed", "error")
                                }}
                                className={styles.web3Button}
                            >
                                Claim
                            </Web3Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
