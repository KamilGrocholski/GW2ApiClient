export type RaidId = string

export type Raid = {
    id: RaidId
    wings: {
        id: string
        events: {
            id: string
            type: 'Checkpoint' | 'Boss'
        }[]
    }[]
}