export enum Professions {
    'Guardian',
    'Revenant',
    'Warrior',
    'Engineer',
    'Ranger',
    'Thief',
    'Elementalist',
    'Mesmer',
    'Necromancer'
}

export enum Races {
    'Asura',
    'Charr',
    'Human',
    'Norn',
    'Sylvari'
}

export enum Genders {
    'Male',
    'Female'
}

export enum Disciplines {
    'Armorsmith',
    'Artificer',
    'Chef',
    'Huntsman',
    'Jeweler',
    'Leatherworker',
    'Scribe',
    'Tailor',
    'Weaponsmith'
}

export enum Slots {
    'HelmAquatic',
    'Backpack',
    'Coat',
    'Boots',
    'Gloves',
    'Helm',
    'Leggings',
    'Shoulders',
    'Accessory1',
    'Accessory2',
    'Ring1',
    'Ring2',
    'Amulet',
    'WeaponAquaticA',
    'WeaponAquaticB',
    'WeaponA1',
    'WeaponA2',
    'WeaponB1',
    'WeaponB2',
    'Sickle',
    'Axe',
    'Pick'
}

export enum Attributes {
    'Power',
    'Precision',
    'Toughness',
    'Vitality',
    'Condition Damage',
    'Condition Duration',
    'Healing',
    'BoonDuration'
}

export enum ItemStoreLocation {
    'Equipped',
    'Armory',
    'EquippedFromLegendaryArmory',
    'LegendaryArmory'
}

export enum Bindings {
    'Account',
    'Character'
}


export type WinLossObject = {
    wins: number
    losses: number
    desertions: number
    byes: number
    forfeits: number
}

export type PvPStats = {
    pvp_rank: number
    pvp_rank_points: number
    pvp_rank_rollovers: number
    aggregate: WinLossObject
    professions: WinLossObject
    ladders: {
        ranked: WinLossObject
        unranked: WinLossObject
    }
} 

export type PvPGames = {
    id: string
    map_id: number
    started: string
    ended: string
    result: string
    team: string
    profession: string
    scores: {
        red: number
        blue: number
    } 
    rating_type: 'Ranked' | 'Unranked' | 'None'
    rating_change: number
    season?: string 
} 