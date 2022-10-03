export type GliderId = string

export type Glider = {
    id: GliderId
    unlock_items?: number[] | null
    order: number
    icon: string | null
    name: string | null
    description: string 
    default_dyes: number[] | null
}
