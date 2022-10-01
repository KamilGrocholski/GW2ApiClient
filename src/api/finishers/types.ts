export type FinishersIds = string[]

export type Finisher = {
    id: number
    unlock_details?: string | null
    unlock_items?: number[] | null
    order: number
    icon: string
    name: string 
}

export type Finishers = Finisher[]