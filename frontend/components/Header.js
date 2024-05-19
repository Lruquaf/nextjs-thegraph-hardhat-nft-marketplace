import {ConnectWallet} from "@thirdweb-dev/react"
import Link from "next/link"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.title}>NFT Marketplace</h1>
            <div className={styles.linksDiv}>
                <Link href="/" className={styles.links}>
                    Home
                </Link>
                <Link href="/dashboard" className={styles.links}>
                    Dashboard
                </Link>
                <Link href="/sell-nft" className={styles.links}>
                    Sell NFT
                </Link>
            </div>
            <div className={styles.connectDiv}>
                <ConnectWallet />
            </div>
        </nav>
    )
}
