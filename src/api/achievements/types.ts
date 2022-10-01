export type getAllIds = number[]

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
export type getByIds = {
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
}[] | null


export type Categories = {
    
}[]