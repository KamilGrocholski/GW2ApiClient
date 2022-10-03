export type NoveltyId = number

export type Novelty = {
    id: NoveltyId
    name: string
    description: string
    icon: string
    slot: 'Chair' | 'Music' | 'HeldItem' | 'Miscellaneous' | 'Tonic'
    unlock_item?: number[] | null
}
