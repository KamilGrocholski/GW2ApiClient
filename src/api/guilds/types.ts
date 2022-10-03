import { PvPGames, PvPStats } from "../common/types"

export type GuildId = string

export type Guild = {
    id: GuildId
    name: string
    tag: string
    emblem: {
        background: {
            id: number
            colors: number[]
        }[]
        foreground: {
            id: number
            colors: number[]
        }[]
        flags: ('FlipBackgroundHorizontal' | 'FlipBackgroundVertical')[]
    }
}

export type GuildeWithLeaderOrMemberTokek = { 
    level: number
    motd: string
    influence: number
    aetherium: string
    favor: number
    memeber_count: number
    member_capacity: number
} & Guild 

export type LogId = number

export type Log = {
    id: LogId
    time: string
    user?: string
    type: 'joined' | 'kick' | 'rank_change' | 'treasury' | 'stash' | 'motd' | 'upgrade'
    old_rank?: string
    new_rank?: string
    item_id?: number
    count?: number
    operation?: 'deposit' | 'withdraw' | 'move'
    coins?: number
    motd?: string
    action?: 'queued' | 'cancelled' | 'completed' | 'sped_up'
    upgrade_id?: number
    recipe_id?: number
} & Partial<Record<'invited_by' | 'kicked_by' | 'changed_by', string>>

export type Members = {
    name: string
    rank: string
    joined: string
}[]

export type Ranks = {
    id: string
    order: number
    permission: string[] | null
    icon: string
}

export type Stash = {
    upgrade_id: number
    size: number
    coins: number   
    note: string
    inventory: ({
        id: number
        count: number
    } | null)[]
}

export type Storage = {
    id: number
    count: number
}[]

export type Teams = {
    id: number
    members: {
        name: string
        role: 'Captain' | 'Member'
    }[]
    name: string
    aggregate: PvPStats
    ladders: PvPStats
    games: Omit<PvPGames, 'profession'>
    season: {
        id: string
        wins: number
        losses: number
        rating: number
    }[]
}

export type Treasury = {
    item_id: number
    count: number
    needed_by: {
        upgrade_id: number
        count: number
    }[]
}

export type GuildUpgradesInformations = number[] | null

export type Permissions = {
    id: string
    name: string
    description: string
}[]

export type Upgrade = {
    id: number
    name: string
    description: string 
    bag_max_items: number
    bax_max_coints: number
    type: 'AccumulatingCurrency' 
        | 'BankBag' 
        | 'Boost' 
        | 'Claimable' 
        | 'Consumable' 
        | 'Decoration' 
        | 'Decoration' 
        | 'GuildHallExpedition' 
        | 'Hub' 
        | 'Queue' 
        | 'Unlock'
    icon: string
    build_time: number
    required_level: number
    experience: number
    prerequisites: number[] | null
    costs: {
        type: 'Item' | 'Collectible' | 'Currency' | 'Coins'
        name: string
        count: number
        item_id?: number 
    }[]
}

export type UpgradesListId = number[] | null