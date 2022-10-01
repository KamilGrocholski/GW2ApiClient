export type DungeonsIds = string[]

export type Dungeon = {
    id: string
    paths: {
        id: string
        type: 'Story' | 'Explorable'
    }[]
}
