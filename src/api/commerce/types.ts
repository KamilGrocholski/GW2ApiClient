export type Delivery = {
    coins: number
    items: {
        id: number
        count: number
    }[]
}

export type ExchangeRate = {
    coins_per_gems: number
    quantity: number
}

export type ListingId = number

export type Listing = {
    id: ListingId
    buys: {
        listings: number
        unit_price: number
        quantity: number
    }[]
    sells: {
        listings: number
        unit_price: number
        quantity: number
    }[]
}


export type PriceId = number

export type Price = {
    id: PriceId
    whitelisted: boolean
    buys: {
        unit_price: number
        quantity: number
    }
    sells: {
        unit_price: number
        quantity: number
    }
}

export type TransactionsCurrent = {
    id: number
    item_id: number
    price: number
    quantity: number
    created: string
}[] | null 

export type TransactionsHistory = {
    id: number
    item_id: number
    price: number
    quantity: number
    created: string
    purchased: string 
}[] | null