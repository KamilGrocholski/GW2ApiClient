export type GlidersIds = string[]

export type Glider = {
    id: number
    unlock_items?: number[] | null
    order: number
    icon: string | null
    name: string | null
    description: string 
    default_dyes: number[] | null
}

export type Gliders = Glider[]