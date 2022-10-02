import { ItemRarity, ItemType, ItemFlag, GameType, ArmorSlot, WeightClass, ConsumableType, UnlockType, WeaponsType, ArmorWeight, Attributes, WeaponsWithExtrasType, DamageType } from "../common/types"

export type ItemId = number
export type ItemsIds = ItemId[]

export type Item = {
    id: ItemId
    chat_link: string
    name: string
    icon?: string
    description?: string
    type: ItemType
    rarity: ItemRarity
    level: number
    vendor_value: number
    default_skin?: number
    flags: ItemFlag[] | null
    game_types: GameType[] | null
    upgrades_into?: {
        upgrade: 'Attunement' | 'Infusion'
        item_id: number
    }[]
    upgrades_form?: {
        upgrade: 'Attunement' | 'Infusion'
        item_id: number
    }[]
    details?: 
        | Armor 
        | BackItem 
        | Bag 
        | Consumable 
        | Container 
        | GatheringTools 
        | Gizmo 
        | Miniature
        | SalvageKits
        | Trinket
        | UpgradeComponent
        | Weapon
}

export type Items = Item[]

export type InfusionSlots = {
    attribute_adjustment: number
    infix_upgrade?: {
        suffix_item_id?: number
        secondary_suffix_item_id: string | null
        stat_choices?: number[] | null
    }
}[] | null

export type Armor = {
    type: ArmorSlot
    weight_class: WeightClass
    defense: number
    infusion_slots: InfusionSlots
}

export type BackItem = InfusionSlots

export type Bag = {
    size: number
    no_sell_or_sort: boolean
}

export type Consumable = {
    type: ConsumableType
    description?: string
    duration_ms?: number
    unlock_type: UnlockType
    color_id?: number
    recipe_id?: number
    extra_recipe_ids?: number[] | null
    guild_upgrade_id?: number
    apply_count?: number
    name?: string
    icon?: string
    skins?: number[] | null    
}

export type Container = {
    type: 'Default' | 'GiftBox' | 'Immediate' | 'OpenUI'
}

export type GatheringTools = {
    type: 'Foraging' | 'Logging' | 'Mining'
}

export type Gizmo = {
    type: 'Default' | 'ContainerKey' | 'RentableContractNpc' | 'UnlimitedConsumable'
    guild_upgrade_id?: number
    vendor_ids?: number[] | null 
}

export type Miniature = {
    minipet_id: number
}

export type SalvageKits = {
    type: 'Salvage'
    charges: number
}

export type Trinket = {
    type: 'Accessory' | 'Amulet' | 'Ring'
    infusionSlots: InfusionSlots
}

export type UpgradeComponent = {
    type: 'Default' | 'Gem' | 'Rune' | 'Sigil'
    flags: (ArmorWeight | 'Trinket' | WeaponsType)[] | null
    infusion_upgrade_flags: ('Enrichment' | 'Infusion')[] | null
    suffix: string
    infix_upgrade: InfixUpgrade 
    bonuses?: string[] | null
}

export type InfixUpgrade = {
    id: number
    attributes: {   
        attribute: Attributes
        modifier: number
    }[] | null
    buff?: {
        skill_id: number
        description?: string | null
    }
}

export type InfusionSlotsSubobject = {
    flags: ('Enrichment' | 'Infusion')[] | null
    item_id?: number
}

export type Weapon = {
    type: WeaponsWithExtrasType
    damage_type: DamageType
    min_power: number
    max_power: number
    defense: number
    inusion_slots: InfusionSlots
}