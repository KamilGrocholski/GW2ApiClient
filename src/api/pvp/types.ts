import { Attributes, Professions, PvPGames, PvPStats, WinLossObject } from "../common/types"

export type AmuletId = number

export type Amulet = {
    id: AmuletId
    name: string
    icon: string
    attributes: Partial<Record<Attributes, number>>
}

export type GameId = string

export type Game = PvPGames

export type HeroId = string

export type Hero = {
    id: HeroId
    name: string
    type: string
    stats: Record<'offense' | 'defense' | 'speed', number>
    overlay: string
    underlay: string
    skins: {
        id: number
        name: string
        icon: string
        default: boolean
        unlock_items?: number[] | null
    }[] | null
}

export type RankId = number

export type Rank = {
    id: RankId
    finisher_id: number
    name: string
    icon: string
    min_rank: number
    max_rank: number
    levels: {
        min_rank: number
        max_rank: number
        points: number
    }[] | null
}

export type SeasonId = string

export type Season = {
    id: RankId
    name: string
    start: string
    end: string
    active: boolean
    divisions: {
        name: string
        flags: ('CanLosePoints' | 'CanLoseTiers' | 'Repeatable')[] | null
        large_icon: string
        small_icon: string
        pip_icon: string
        tiers: {
            points: number
        }[] | null
    }[] | null
    ranks?: {
        name: string
        description: string | null
        icon: string
        overlay: string
        overlay_small: string
        tiers: {
            rating: number
        }[] | null
    }[] | null
    leaderboards: Partial<Record<'ladder' | 'legendary' | 'guild', {
        settings: {
            name: string | null
            duration?: number | null
            scoring: string
            tiers: {
                range: number
            }[]
        }
        scorings: {
            id: string
            type: string
            description: string | null
            name: string
            ordering: string
        }
    }>>
}

export type Leaderboard = {
    name: string
    rank: number
    id: string
    team?: string
    team_id?: number
    date: string
    scores: {
        id: string
        value: number
    }[]
} | undefined

export type Standings = {
    current: {
        total_points: number
        division: number
        tier: number
        points: number
        repeats: number
        rating?: number
        decay?: number
    }
    best: {
        total_points: number
        division: number
        tier: number
        points: number
        repeats: number
    }
    season_id: SeasonId
}

export type Stats = PvPStats