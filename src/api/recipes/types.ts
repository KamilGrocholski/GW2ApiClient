import { Aquatic, ArmorSlot, CraftingComponentType, Discipline, FoodType, GuildItemType, OneHandedMainHand, OneHandedOffHand, OtherItemsType, Refinement, TrinketType, TwoHanded, WeaponsType } from "../common/types"

export type RecipeId = number

export type Recipe = {
    id: RecipeId
    type: 
        | OneHandedMainHand 
        | OneHandedOffHand 
        | TwoHanded 
        | Aquatic
        | ArmorSlot
        | TrinketType
        | FoodType
        | CraftingComponentType
        | Refinement
        | GuildItemType
        | OtherItemsType
    output_item_id: number
    output_item_count: number
    time_to_craft_ms: number
    disciplines: Discipline[]
    min_rating: number
    flags: ('AutoLearned' | 'LearnedFromItem')[] | null
    ingredients: {
        item_id: number
        count: number
        type?: 'Currency' | 'Item'
    }[]
    guild_ingredients?: {
        item_id: number
        count: number
        type?: 'Currency' | 'Item'
    }[] | null
    output_upgrade_id?: number
    chat_link: string
}