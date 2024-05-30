import {useState, useEffect} from "react"
import styles from "../styles/Dashboard.module.css"
import {
    Web3Button,
    useAddress,
    useChainId,
    useContract,
    useContractRead,
} from "@thirdweb-dev/react"
import {useQuery} from "@apollo/client"
import graphQueries from "../constants/graphQueries"
import CONTRACT_ADDRESSES from "../constants/addresses"
import {ethers} from "ethers"
import {notifyAction} from "../components/Notification"
import NFTBox from "../components/NFTBox"

export default function Dashboard() {
    const chainId = useChainId()
    const address = useAddress()
    const [activeSection, setActiveSection] = useState("proceeds")

    const {
        loading,
        error,
        data: listedNFTsForAddress,
        refetch,
    } = useQuery(graphQueries.GET_ACTIVE_ITEMS_FOR_ADDRESS, {
        skip: !address,
        variables: {seller: address},
    })

    if (error) {
        console.error("Apollo query error:", error)
    }

    const marketplaceAddress =
        CONTRACT_ADDRESSES[chainId] !== undefined
            ? CONTRACT_ADDRESSES[chainId].NftMarketplace
            : undefined

    const {contract: nftMarketplace, error: nftContractError} =
        useContract(marketplaceAddress)

    const {data: proceeds, isLoading: proceedsIsLoading} = useContractRead(
        nftMarketplace,
        "getProceeds",
        [address]
    )

    const handleAction = (message, type) => {
        notifyAction(message, type)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 20000)

        return () => clearInterval(interval)
    }, [refetch, proceeds, address])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.dashboardContainer}>
                <h1 className={styles.dashboardTitle}>Your Dashboard</h1>
                <div className={styles.toggleButtons}>
                    <button
                        className={`${styles.toggleButton} ${
                            activeSection === "proceeds"
                                ? styles.activeButton
                                : ""
                        }`}
                        onClick={() => setActiveSection("proceeds")}
                    >
                        Your Proceeds
                    </button>
                    <button
                        className={`${styles.toggleButton} ${
                            activeSection === "listings"
                                ? styles.activeButton
                                : ""
                        }`}
                        onClick={() => setActiveSection("listings")}
                    >
                        Your Listings
                    </button>
                </div>
                {activeSection === "proceeds" ? (
                    <div className={styles.proceedsContainer}>
                        <h2>Your Proceeds</h2>
                        {proceedsIsLoading ? (
                            <div className={styles.loadingText}>Loading...</div>
                        ) : (
                            <div>
                                <div className={styles.balanceText}>
                                    Your Balance:{" "}
                                    {ethers.utils.formatEther(proceeds)} ETH
                                </div>
                                <Web3Button
                                    contractAddress={marketplaceAddress}
                                    action={async (contract) => {
                                        await contract.call("withdrawProceeds")
                                    }}
                                    onSuccess={() => {
                                        handleAction(
                                            "Transaction Submitted",
                                            "success"
                                        )
                                    }}
                                    onError={(error) => {
                                        console.log(error)
                                        handleAction(
                                            "Transaction Failed",
                                            "error"
                                        )
                                    }}
                                    className={styles.web3Button}
                                >
                                    Claim
                                </Web3Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.listingsContainer}>
                        <h1 className={styles.pageTitle}>Your Listings</h1>
                        <div className={styles.listedNfts}>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                listedNFTsForAddress?.activeListings.map(
                                    (nft) => {
                                        const {
                                            seller,
                                            nftAddress,
                                            tokenId,
                                            price,
                                        } = nft
                                        return (
                                            <NFTBox
                                                price={price}
                                                nftAddress={nftAddress}
                                                tokenId={tokenId}
                                                seller={seller}
                                                key={`${tokenId}${nftAddress}`}
                                            />
                                        )
                                    }
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
