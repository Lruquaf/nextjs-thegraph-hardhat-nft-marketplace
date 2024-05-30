import {gql} from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    query GetActiveItems {
        activeListings(
            first: 5
            where: {buyer: "0x0000000000000000000000000000000000000000"}
        ) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

const GET_ACTIVE_ITEMS_FOR_ADDRESS = gql`
    query GetActiveItemsForAddress($seller: String!) {
        activeListings(first: 5, where: {seller: $seller}) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export default {GET_ACTIVE_ITEMS, GET_ACTIVE_ITEMS_FOR_ADDRESS}
