import { ContinentRect, MapRect } from "../continents/types"

export type MapId = number

export type Map = {
    id: MapId
    name: string
    min_level: number
    max_level: number
    default_floor: number
    type: 'BlueHome'
        | 'Center'
        | 'EdgeOfTheMists'
        | 'GreenHome'
        | 'Instance'
        | 'JumpPuzzle'
        | 'Public'
        | 'Pvp'
        | 'RedHome'
        | 'Tutorial'
        | 'Unknown'
    floors: number[] | null
    region_id: number
    region_name?: string | null
    continent_id: number
    continent_name: string
    map_rect: MapRect
    continent_rect: ContinentRect
}
