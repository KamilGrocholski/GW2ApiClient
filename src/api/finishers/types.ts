export type FinisherId = string

export type Finisher = {
    id: FinisherId
    unlock_details?: string | null
    unlock_items?: number[] | null
    order: number
    icon: string
    name: string 
}
