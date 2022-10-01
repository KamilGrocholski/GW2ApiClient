export type CurrenciesIds = number[]

export type Currency = {
    id: number
    name: string
    description: string
    icon: string
    order: number
}

export type Currencies = Currency[]