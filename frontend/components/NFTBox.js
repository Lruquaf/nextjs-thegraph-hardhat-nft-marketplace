import {useState, useEffect} from "react"
import {
    MediaRenderer,
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
    useChainId,
    useConnectionStatus,
    ConnectWallet,
} from "@thirdweb-dev/react"

import styles from "../styles/Modal.module.css"

import {CONTRACT_ABI} from "../constants/MedievalGenerals.json"
import {ethers} from "ethers"
import NFTModal from "./NFTModal"

export default function NFTBox({
    // marketplace,
    seller,
    nftAddress,
    tokenId,
    price,
}) {
    const status = useConnectionStatus()
    const rawAddress = useAddress()
    const address =
        rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress

    const chainId = useChainId()

    const [imageUri, setImageUri] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")

    const [showModal, setShowModal] = useState(false)
    const hideModal = () => setShowModal(false)

    const {contract} = useContract(nftAddress)

    const {
        data: nftUri,
        isLoading: isNftUriLoading,
        error,
    } = useContractRead(contract, "tokenURI", tokenId)

    const truncatedAddress = (address) =>
        `${address.slice(0, 6)}...${address.slice(-4)}`
    const isOwnedByUser = seller === address
    const formattedSellerAddress = isOwnedByUser
        ? "you"
        : truncatedAddress(seller)

    async function updateUI() {
        if (nftUri) {
            const requestURL = nftUri.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
            )
            const tokenUriResponse = await (await fetch(requestURL)).json()

            setImageUri(tokenUriResponse.image)
            setTokenName(tokenUriResponse.name)
            setTokenDescription(tokenUriResponse.description)
        }
    }

    useEffect(() => {
        if (status === "connected" && contract !== undefined) {
            updateUI()
        }
    }, [contract, status, nftUri, price])

    const handleCardClick = () => {
        setShowModal(true)
    }

    return (
        <div>
            <div>
                {!(chainId === undefined) ? (
                    imageUri || !isNftUriLoading ? (
                        <div>
                            {showModal && (
                                <div>
                                    {
                                        <NFTModal
                                            // marketplace={marketplace}
                                            isOwnedByUser={isOwnedByUser}
                                            tokenId={tokenId}
                                            nftAddress={nftAddress}
                                            price={price}
                                            onClose={hideModal}
                                        />
                                    }
                                </div>
                            )}
                            <div onClick={handleCardClick}>
                                <div>
                                    <MediaRenderer
                                        src={imageUri}
                                        width="250px"
                                        height="250px"
                                    />
                                </div>
                                <h2>{tokenName}</h2>
                                <p>{tokenDescription}</p>
                                <p>
                                    {tokenId} of {truncatedAddress(nftAddress)}
                                </p>
                                <h3>{ethers.utils.formatEther(price)} ETH</h3>
                                <p>owned by {formattedSellerAddress}</p>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )
                ) : (
                    <div>
                        Please Connect Your Wallet
                        <ConnectWallet />
                    </div>
                )}
            </div>
        </div>
    )
}
