import { BackstoryTypes } from "../backstory"
import { Attributes, Bindings, Disciplines, Genders, ItemStoreLocation, Professions, Races, Slots } from "../common/types"

export type CharacterName = string

export type CharacterId = number

export type Character = 
    Core
    & Crafting
    & BackstoryIds
    & Extras
    & Specializations
    & Skills
    & Recipes
    & Equipment
    & Training
    & Inventory
    & BuildTabs


export type BackstoryIds = BackstoryTypes.AnswerId[] // OK  

export type BuildTabs = { 
    build_tabs: {
        tab: number
        is_active: boolean
        build: {
            name: string
            profession: Professions
            specializations: {
                id: number | null
                traits: number | null 
            }[] | null
            skills: {
                heal: number | null
                utilities: number | null 
                elite: number | null
            }
            aquatic_skills: {
                heal: number | null
                utilities: number[] | null 
                elite: number | null 
            }
            legends?: string[] | null 
            aquatic_legends?: string[] | null  
            pets?: {
                terrestrial: number[] | null
                aquatic: number[] | null
            }
        }
    }[] | null
}

export type Core = { //OK
    name: string
    race: Races
    gender: Genders
    profession: Professions
    level: number
    guild: string | null
    age: number
    last_modified: string
    created: string
    deaths: number
    title?: number 
}

export type Crafting = { //OK
    crafting: {
        discipline: Disciplines
        rating: number
        active: boolean
    }[] | null
}

export type Equipment = { //OK
    equipment: {
        id: number
        slot?: Slots
        infusions?: number | null
        upgrades?: number | null
        skin?: number
        stats?: {
            id: number
            attributes: Partial<Record<Attributes, number>>
        }  
        binding?: Bindings
        location: ItemStoreLocation
        tabs: number | null
        charges?: number
        bound_to?: string 
        dyes?: number | null
    }[] | null
}

export type EquipmentTabs = {
    equipment_tabs: {
        tab: number
        name: string
        is_active: boolean
        equipment: {
            id: number
            slot: Slots
            skin?: number
            upgrades?: number | null
            infusions?: number | null  
            binding: Bindings
            bount_to?: string
            location: 'Equipped' | 'Armory'
            dyes?: number | null 
            stats?: {
                id: number
                attributes: Partial<Record<Attributes, number>>
            } 
        }[] | null 
        equipment_pvp: {
            amulet: number
            rune: number
            sigils: number[]
        }[] | null
    }[] | null
}

export type Recipes = { // OK
    recipes: number[] | null
}

export type HeroPoints = string[] | null // OK

export type Inventory = { // OK 
    bags: {
        id: number
        size: number 
        inventory: {
                id: number
                count: number
                charges?: number
                infusions?: number[] | null
                upgrades?: number[] | null
                sking?: number
                stats?: {
                    id: number
                    attributes: Partial<Record<Attributes, number >>
                } 
                dyes?: number[] | null
                binding?: Bindings
                bound_to?: string 
        }[] | null
    }[] | null
}

export type Skills = {
    skills?: {
        pve: {
            heal: number
            utilities: number[] | null
            elite: number
            legends?: string[] | null
        }
        pvp: {
            heal: number
            utilities: number[] | null
            elite: number
            legends?: string[] | null
        }
        wvw: {
            heal: number
            utilities: number[] | null
            elite: number
            legends?: string[] | null
        }
    }
}

export type Specializations = {
    specializations?: {
        pve: {
            id: number
            traits: number | null
        }[] | null
        pvp: {
            id: number
            traits: number | null 
        }[] | null
        wvw: {
            id: number
            traits: number | null
        }[] | null
    }
}

export type Training = { // OK
    training: {
        id: number
        spent: number
        done: boolean
    }[] | null
} 

export type SuperAdventureBox = {
    zones: {
        id: number
        mode: string
        world: number
        zone: number
    }[] | null
    unlocks: {
        id: number
        name: string
    }[] | null
    songs: {
        id: number
        name: string
    }[] | null
}

export type Extras = {
    wvw_abilities: {
        id: number
        rank: number
    }[] | null
    equipment_pvp?: {
        amulet: number 
        rune: number 
        sigils: number[] | null
    }[] | null | undefined 
    flags: string[] | null
    build_tabs_unlocked: number
    active_build_tab: number
    equipment_tabs_unlocked: number
    active_equipment_tab: number
}