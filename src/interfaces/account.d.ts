import { ItemStats } from "."

export interface Account {
    id: string
    age: number
    name: string
    world: number
    guilds?: string[] | null
    guild_leader?: string[] | null
    created: string
    access?: string[] | null
    commander: boolean
    fractal_level: number
    daily_ap: number
    monthly_ap: number
    wvw_rank: number
}

export interface Achievements {
    id: number
    bits?: number[] | null
    current?: number | null
    max?: number | null
    done: boolean
    repeated?: number | null
    unlocked?: boolean | null 
}

export type Bank = {
    id: number
    count: number
    charges?: number | null
    skin?: number | null
    dyes?: number[] | null
    upgrades?: number[] | null
    upgrade_slot_indices?: number[] | null
    infusion?: number[] | null
    binding?: string | null
    bound_to?: string | null
    stats?: {
        id: number
        attributes?: {
            AgonyResistance?: number | null
            BoonDuration?: number | null 
            ConditionDamage?: number | null 
            ConditionDuration?: number | null
            CritDamage?: number | null
            Healing?: number | null
            Power?: number | null
            Precision?: number | null
            Toughness?: number | null
            Vitality?: number | null
        } | null
    } | null
}[]
  
export type BuildStorage = number[] | null

export type DailyCrafting = string[] | null

export type Dungeons = string[] | null

export type Dyes = number[] | null

export type Finishers = {
    id: number
    permanent: boolean
    quantity?: number
}[]

export type Gliders = number[] | null

export type Home = string[] | null

export type Home_Cats = number[] | null

export type Home_Nodes = string[] | null

export type LegendaryArmory = {
    id: number
    count: int
}[] | null

export type Luck = {
    id: 'luck'
    value: number
}[] | null

export type MailCarriers = number[] | null

export type MapChests = string[] | null

export type Masteries = {
    id: number
    level: number
}[] | null

export interface MasteryPoints {
    total: {
        region: string
        spent: number
        earned: number
    }[] | null
    unlocked: number[] | null
}

export type Materials = {
    id: number
    category: number
    binding?: string | null
    count: number
}[]

export type Minis = number[] | null

export type Mounts = string[]

export type Mounts_Types = string[] | null

export type Mounts_Skins = number[] | null

export type Novelties = number[] | null

export type Outfits = number[] | null

export type Progression = {
    id: string
    value: number
}[]

export type PvPHeroes = number[] | null

export type Raids = string[] | null

export type Recipes = number[] | null

export type Inventory = {
    id: number
    count: number
    charges?: number
    skin?: number
    upgrades?: {
        id: number
    }[] | null
    infusions?: {
        id: number
    }[] | null
    binding?: string 
    stats: {
        id: number
        attributes: {
            [key: ItemStats['attributes'][number]['attribute']]: number
        }
    }
}[]

export type Skins = number[] | null

export type Titles = number[] | null

export type Wallet = {
    id: number
    value: number
}[]

export type WorldBosses = string[] | null

export type Emotes = string[] | null