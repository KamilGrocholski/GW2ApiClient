import { ArmorSlot, DamageType, ItemRarity, MaterialType, Races, RacesWithGenders, WeightClass } from "../common/types"

export type SkinId = number

export type Skin = {
    id: SkinId
    name: string
    type: 'Armor' | 'Weapon' | 'Back' | 'Gathering'
    flags?: ('ShowInWardrobe' | 'NoCost' | 'HideIfLocked' | 'OverrideRarity')[] | null
    restrictions: Races[] | null
    icon: string
    rarity: ItemRarity
    description?: string
    details?: Armor | Weapons | Gathering
}

interface Armor {
    type: ArmorSlot
    weight_class: WeightClass
    dye_slots?: {
        default: (null | {
            color_id: number
            material: MaterialType
        })[]
        overrides: Partial<Record<RacesWithGenders, {
            color_id: number
            material: MaterialType
        }>>
    }
}

interface Weapons {
    type: string
    damage_type: DamageType
}

interface Gathering {
    type: 'Foraging' | 'Logging' | 'Mining'
}