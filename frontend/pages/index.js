import styles from "../styles/Home.module.css"
import {useQuery} from "@apollo/client"
import GET_ACTIVE_ITEMS from "../constants/graphQueries"
import NFTBox from "../components/NFTBox"
import {useChainId, useContract} from "@thirdweb-dev/react"
import CONTRACT_ADDRESSES from "../constants/addresses"
import NftMarketplace from "../constants/NftMarketplace.json"
import {useEffect} from "react"

export default function Home() {
    // const chainId = useChainId()
    // const marketplaceAddress =
    //     CONTRACT_ADDRESSES[chainId] !== undefined
    //         ? CONTRACT_ADDRESSES[chainId].NftMarketplace
    //         : undefined
    // const marketplaceAbi = NftMarketplace
    const {
        loading,
        error,
        data: listedNFTs,
        refetch,
    } = useQuery(GET_ACTIVE_ITEMS)

    // const {marketplaceContract} = useContract(marketplaceAddress)
    // console.log("Address: ", marketplaceAddress)
    // console.log("Abi: ", marketplaceAbi)
    // console.log("CContract index: ", marketplaceContract)

    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 20000)

        return () => clearInterval(interval)
    }, [refetch])

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Recently Listed</h1>
                <div className={styles.listedNfts}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        listedNFTs.activeListings.map((nft) => {
                            console.log(nft)
                            const {seller, nftAddress, tokenId, price} = nft
                            return (
                                <NFTBox
                                    // marketplaceAddress={marketplaceContract}
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    seller={seller}
                                    key={`${tokenId}${nftAddress}`}
                                />
                            )
                        })
                    )}
                </div>
            </div>
        </main>
    )
}
