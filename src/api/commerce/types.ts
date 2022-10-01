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

export type ListingsIds = number[]

export type Listing = {
    id: number
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

export type Listings = Listing[]

export type PricesIds = number[]

export type Price = {
    id: number
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

export type Prices = Price[]

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