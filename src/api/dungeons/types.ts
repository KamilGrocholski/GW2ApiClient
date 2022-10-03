export type DungeonId = string

export type Dungeon = {
    id: DungeonId
    paths: {
        id: string
        type: 'Story' | 'Explorable'
    }[]
}
