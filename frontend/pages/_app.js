import {ThirdwebProvider} from "@thirdweb-dev/react"
import "../styles/globals.css"
import Header from "../components/Header"
import Notification from "../components/Notification"
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"
import {Sepolia} from "@thirdweb-dev/chains"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = Sepolia

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/65573/nft-marketplace-test/v0.0.7",
})

function MyApp({Component, pageProps}) {
    return (
        <ThirdwebProvider
            activeChain={activeChain}
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        >
            <ApolloProvider client={client}>
                <div>
                    <Notification />
                    <Header />
                    <Component {...pageProps} />
                </div>
            </ApolloProvider>
        </ThirdwebProvider>
    )
}

export default MyApp
