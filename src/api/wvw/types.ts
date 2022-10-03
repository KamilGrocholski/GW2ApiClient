import { Coord, LabelCoord } from "../continents/types"
import { GuildId } from "../guilds/types"
import { WorldId } from "../worlds/types"

export type WvWAbilityId = number

export type WvWAbility = {
    id: WvWAbilityId
    name: string
    description: string | null
    icon: string
    ranks: {
        cost: number
        effect: string
    }[]
}

export type WvWMatchId = string


export type WvWMatch = {
    id: WvWAbilityId
    start_time: string
    end_time: string
    scores: Scores
    all_worlds: AllWorlds
    worlds: Worlds
    deaths: Deaths
    kills: Kills
    victory_points: VictoryPoints
    maps: Map[]
}

export type WvWMatchOverview = {
    id: WvWMatchId
    worlds: Worlds
    all_worlds: AllWorlds
    start_time: string
    end_time: string
}

export type WvWMatchScores = {
    id: WvWMatchId
    scores: Scores
    maps: Map[]
}

export type WvWMatchStats = {
    id: WvWMatchId
    deaths: Deaths
    kills: Kills
    maps: Map[]
}

export type WvWMatchStatsByTeamColorTopKills = {
    guild_id: GuildId
    deaths: Deaths
    kills: Kills
}[]

export type WvWMatchStatsByTeamColorTopKdr = {
    guild_id: GuildId
    deaths: Deaths
    kills: Kills
    willson: number
}[]

export type WvWObjectiveId = string 

export type WvWObjective = {
    id: WvWObjectiveId
    name: string
    type: 
        | 'Camp'
        | 'Castle'
        | 'Keep'
        | 'Mercenary'
        | 'Tower'
        | 'Ruins'
        | 'Resource'
        | 'Generic'
        | 'Spawn'
    sector_id: number
    map_id: number
    map_type: MapIdentifier | 'EdgeOfTheMists'
    coord?: [number, number, number]
    label_coord?: LabelCoord
    marker?: string 
    chat_link: string
    upgrade_id?: number
}

export type WvWRankId = number

export type WvWRank = {
    id: WvWRankId
    title: string
    min_rank: number
}

export type WvWUpgradeId = string 

export type WvWUpgrade = {
    id: WvWUpgradeId
    tiers: {
        name: string
        yaks_required: number
        upgrades: {
            name: string
            description: string
            icon: string
        }[]
    }[]
}

type Scores = Record<WvWColor, number>
type AllWorlds = Record<WvWColor, number[]>
type Worlds = Record<WvWColor, WorldId>
type Deaths = Record<WvWColor, number>
type Kills = Record<WvWColor, number>
type VictoryPoints = Record<WvWColor, number>

type MapIdentifier = 'RedHome' | 'GreenHome' | 'BlueHome' | 'Center'

type WvWOwner = 'Red' | 'Green' | 'Blue' | 'Neutral'

export type WvWColor = 'red' | 'blue' | 'green'

type Map = {
    id: number
    type: MapIdentifier
    scores: Scores
    kills: Kills
    deaths: Deaths
    objectives: {
        id: string
        type: 'Spawn' | 'Camp' | 'Ruins' | 'Tower' | 'Keep' | 'Castle' | 'Mercenary'
        owner: WvWOwner
        last_flipped: string
        claimed_by?: string | null
        claimed_at?: string | null
        points_tick: number
        points_capture: number
        guild_upgrades?: number[] | null
        yaks_delivered?: number
    }[]
    bonuses?: {
        type: string
        owner: WvWOwner
    }[] | null
    skirmishes: {
        id: number
        scores: Scores
        map_scores: {
            type: MapIdentifier
            scores: Scores
        }[]
    }[]
    victory_points: Scores
}
