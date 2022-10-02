// /v2/achievements
// getAllIds()
export type AchievementsIds = number[]

// /v2/achievements
// getByIds(number[])
export type Acheviement = {
    id: number
    icon?: string
    name: string
    description: string
    requirement: string
    locked_text: string
    type: 'Default' | 'ItemSet'
    flags: (
        'Pvp' 
        | 'CategoryDisplay' 
        | 'MoveToTop' 
        | 'IgnoreNearlyComplete' 
        | 'Repeatable' 
        | 'Hidden' 
        | 'RequiresUnlock' 
        | 'RepairOnLogin' 
        | 'Daily' 
        | 'Weekly' 
        | 'Monthly' 
        | 'Permanent'
    )[] 
    tiers: {
        count: number
        points: number
    }[]
    prerequisites?: number[]
    rewards?: (Coins | Item | Mastery | Title)[]
    bits?: {
        type: 'Text' | 'Item' | 'Minipet' | 'Skin'
        id?: number
        text?: string
    } 
    point_cap?: number 
}

export type Achievements = Achievements[]

type Coins = {
    type: 'Coins'
    count: number
}
type Item = {
    type: 'Item'
    id: number
    count: number
}
type Mastery = {
    type: 'Mastery'
    id: number
    region: 'Tyria' | 'Maguuma' | 'Desert' | 'Tundra'
}
type Title = {
    type: 'Title'
    id: number
}

// /v2/achievements/categories
// getCategoriesAllIds()
export type CategoriesIds = number[]

// /v2/achievements/categories
// getCategoriesByIds(number[])
export type Category = {
    id: number
    name: string
    description: string
    order: number
    icon: string
    achievements: {
        id: number
        required_access?: {
            product: string
            condition: 'HasAccess' | 'NoAccess'
        }
        flags?: ('PvE' | 'PvP' | 'WvW' | 'SpecialEvent')[]
        level?: [number, number]  
    }[]
    tomorrow?: {
        id: number
        required_access?: {
            product: string
            condition: 'HasAccess' | 'NoAccess'
        }
        flags?: ('PvE' | 'PvP' | 'WvW' | 'SpecialEvent')[]
        level?: [number, number]  
    }[]
}

export type Categories = Category[]

// /v2/achievements/daily
// getDaily()
export type Daily = {
    pve: DailySubObject[]
    pvp: DailySubObject[]
    wvw: DailySubObject[]
    fractals: DailySubObject[]
    special: DailySubObject[] 
}


type DailySubObject = {
    id: number
    level: {
        min: number
        max: number
    }
    required_access?: {
        product: string
        condition: 'HasAccess' | 'NoAccess'
    }
}

// /v2/achievements/groups
// getGroupsAllIds()
export type GroupsIds = number[]


// /v2/achievements/groups
// getGroupdByIds(string[])
export type Group = {
    id: string
    name: string
    description: string
    order: number
    categories: number[]
}

export type Groups = Group[]
