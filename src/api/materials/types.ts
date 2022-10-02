export type MaterialId = number
export type MaterialsIds = MaterialId[]

export type Material = {
    id: number
    name: string
    items: number[] | null
    order: number
}

export type Materials = Material[]