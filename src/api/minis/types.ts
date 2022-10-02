export type MiniId = number
export type MinisIds = MiniId[]

export type Mini = {
    id: number
    name: string
    items: number[] | null
    order: number
}

export type Minis = Mini[]