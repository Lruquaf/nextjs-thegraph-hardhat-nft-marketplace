import {Address, BigInt} from "@graphprotocol/graph-ts"
import {
    ItemBought as ItemBoughtEvent,
    ItemListed as ItemListedEvent,
    ListingCancelled as ListingCancelledEvent,
} from "../generated/NftMarketplace/NftMarketplace"
import {
    ActiveListing,
    ItemBought,
    ItemListed,
    ListingCancelled,
} from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
    let itemBought = ItemBought.load(
        getId(event.params.tokenId, event.params.nftAddress),
    )

    if (itemBought == null) {
        itemBought = new ItemBought(
            getId(event.params.tokenId, event.params.nftAddress),
        )
    }

    itemBought.nftAddress = event.params.nftAddress
    itemBought.tokenId = event.params.tokenId
    itemBought.buyer = event.params.buyer
    itemBought.price = event.params.price
    itemBought.blockNumber = event.block.number
    itemBought.blockTimestamp = event.block.timestamp
    itemBought.transactionHash = event.transaction.hash
    itemBought.save()

    let activeListing = new ActiveListing(
        getId(event.params.tokenId, event.params.nftAddress),
    )
    activeListing.buyer = event.params.buyer
    activeListing.save()
}

export function handleItemListed(event: ItemListedEvent): void {
    let itemListed = ItemListed.load(
        getId(event.params.tokenId, event.params.nftAddress),
    )

    if (itemListed == null) {
        itemListed = new ItemListed(
            getId(event.params.tokenId, event.params.nftAddress),
        )
    }

    itemListed.seller = event.params.seller
    itemListed.nftAddress = event.params.nftAddress
    itemListed.tokenId = event.params.tokenId
    itemListed.price = event.params.price
    itemListed.blockNumber = event.block.number
    itemListed.blockTimestamp = event.block.timestamp
    itemListed.transactionHash = event.transaction.hash
    itemListed.save()

    let activeListing = new ActiveListing(
        getId(event.params.tokenId, event.params.nftAddress),
    )
    activeListing.seller = event.params.seller
    activeListing.nftAddress = event.params.nftAddress
    activeListing.tokenId = event.params.tokenId
    activeListing.price = event.params.price
    activeListing.buyer = Address.fromString(
        "0x0000000000000000000000000000000000000000",
    )
    activeListing.save()
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
    let listingCancelled = ListingCancelled.load(
        getId(event.params.tokenId, event.params.nftAddress),
    )

    if (listingCancelled == null) {
        listingCancelled = new ListingCancelled(
            getId(event.params.tokenId, event.params.nftAddress),
        )

        listingCancelled.nftAddress = event.params.nftAddress
        listingCancelled.tokenId = event.params.tokenId
        listingCancelled.seller = event.params.seller
        listingCancelled.blockNumber = event.block.number
        listingCancelled.blockTimestamp = event.block.timestamp
        listingCancelled.transactionHash = event.transaction.hash
        listingCancelled.save()

        let newActiveListing = new ActiveListing(
            getId(event.params.tokenId, event.params.nftAddress),
        )
        newActiveListing.buyer = Address.fromString(
            "0x000000000000000000000000000000000000dEaD",
        )
        newActiveListing.save()
    }
}

function getId(tokenId: BigInt, nftAddress: Address): string {
    return tokenId.toHexString() + nftAddress.toHexString()
}
