export type Professions =
    | 'Guardian'
    | 'Revenant'
    | 'Warrior'
    | 'Engineer'
    | 'Ranger'
    | 'Thief'
    | 'Elementalist'
    | 'Mesmer'
    | 'Necromancer'

export type ProfessionsLowerCase = Lowercase<Professions>

export type Races =
    | 'Asura'
    | 'Charr'
    | 'Human'
    | 'Norn'
    | 'Sylvari'

export type Genders =
    | 'Male'
    | 'Female'

export type RacesWithGenders = `${Races}${Genders}`

export type Slots =
    | 'HelmAquatic'
    | 'Backpack'
    | 'Coat'
    | 'Boots'
    | 'Gloves'
    | 'Helm'
    | 'Leggings'
    | 'Shoulders'
    | 'Accessory1'
    | 'Accessory2'
    | 'Ring1'
    | 'Ring2'
    | 'Amulet'
    | 'WeaponAquaticA'
    | 'WeaponAquaticB'
    | 'WeaponA1'
    | 'WeaponA2'
    | 'WeaponB1'
    | 'WeaponB2'
    | 'Sickle'
    | 'Axe'
    | 'Pick'

export type Attributes =
    | 'Power'
    | 'Precision'
    | 'Toughness'
    | 'Vitality'
    | 'Condition Damage'
    | 'Condition Duration'
    | 'Healing'
    | 'BoonDuration'

export type ItemStoreLocation =
    | 'Equipped'
    | 'Armory'
    | 'EquippedFromLegendaryArmory'
    | 'LegendaryArmory'


export type Bindings = 
    | 'Account'
    | 'Character'



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
    professions: Partial<Record<ProfessionsLowerCase, WinLossObject>>
    ladders: {
        ranked: WinLossObject
        unranked: WinLossObject
        '2v2ranked': WinLossObject
        '3v3ranked': WinLossObject 
    }
} 

export type PvPGames = {
    id: string
    map_id: number
    started: string
    ended: string
    result: 'Bye' | 'Defeat' | 'Victory'
    team: 'Red' | 'Blue'
    profession: Professions
    scores: {
        red: number
        blue: number
    }
    rating_type: 'Ranked' | 'Unranked' | 'None'
    rating_change: number
    season?: string
} 

export type ItemType =
    | 'Armor'
    | 'Back'
    | 'Bag'
    | 'Consumable'
    | 'Container'
    | 'CraftingMaterial'
    | 'Gathering'
    | 'Gizmo'
    | 'Key'
    | 'MiniPet'
    | 'Tool'
    | 'Trait'
    | 'Trinket'
    | 'Trophy'
    | 'UpgradeComponent'
    | 'Weapon'

export type ItemRarity = 
    | 'Junk'
    | 'Basic'
    | 'Fine'
    | 'Masterwork'
    | 'Rare'
    | 'Exotic'
    | 'Ascended'
    | 'Legendary'

export type ItemFlag = 
    | 'AccountBindOnUse'
    | 'AccountBound'
    | 'Attuned'
    | 'BulkConsume'
    | 'DeleteWarning'
    | 'HideSuffix'
    | 'Infused'
    | 'MonsterOnly'
    | 'NoMysticForge'
    | 'NoSalvage'
    | 'NoSell'
    | 'NotUpgradeable'
    | 'NoUnderwater'
    | 'SoulbindOnAcquire'
    | 'SoulBindOnUse'
    | 'Tonic'
    | 'Unique'

export type GameType = 
    | 'Activity'
    | 'Dungeon'
    | 'Pve'
    | 'Pvp'
    | 'PvpLobby'
    | 'Wvw'

export type ItemRestriction =
    | Races
    | Professions
 
export type ArmorSlot = 
    | 'Boots'
    | 'Coat'
    | 'Gloves'
    | 'Helm'
    | 'HelmAquatic' 
    | 'Leggings'
    | 'Shoulders'

export type TrinketType = 
    | 'Amulet'
    | 'Earring' 
    | 'Ring'

export type FoodType = 
    | 'Dessert'
    | 'Feast'
    | 'IngredientCooking'
    | 'Meal'
    | 'Seasoning'
    | 'Snack'
    | 'Soup'
    | 'Food'

export type CraftingComponentType = 
    | 'Component'
    | 'Inscription'
    | 'Insignia'
    | 'LegendaryComponent'

export type Refinement =
    | 'Refinement'
    | 'RefinementEctoplasm'
    | 'RefinementObsidian'

export type GuildItemType =
    | 'GuildConsumable'
    | 'GuildDecoration'
    | 'GuildConsumableWvw'

export type OtherItemsType =
    | 'Backpack'
    | 'Bag'
    | 'Bulk'
    | 'Consumable'
    | 'Dye'
    | 'Food'
    | 'Potion'
    | 'UpgradeComponent'

export type WeightClass = 
    | 'Heavy'
    | 'Medium'
    | 'Light'
    | 'Clothing'

export type ConsumableType = 
    | 'AppearanceChange'
    | 'Booze'
    | 'ContractNpc'
    | 'Currency' 
    | 'Food'
    | 'Generic'
    | 'Halloween'
    | 'Immediate'
    | 'MountRandomUnlock'
    | 'RandomUnlock'
    | 'Transmutation'
    | 'Unlock'
    | 'UpgradeRemoval'
    | 'Utility'
    | 'TeleportToFriend'

export type Discipline = 
    | 'Artificer'
    | 'Armorsmith'
    | 'Chef'
    | 'Huntsman'
    | 'Jeweler'
    | 'Leatherworker'
    | 'Tailor'
    | 'Weaponsmith'
    | 'Scribe'

export type UnlockType = 
    | 'BagSlot'
    | 'BankTab'
    | 'Champion'
    | 'CollectibleCapacity'
    | 'Content'
    | 'CraftingRecipe'
    | 'Dye'
    | 'GliderSkin'
    | 'Minipet'
    | 'Ms'
    | 'Outfit'
    | 'RandomUlock'
    | 'SharedSlot'

export type WeaponsType = 
    | OneHandedMainHand 
    | OneHandedOffHand
    | TwoHanded
    | Aquatic

export type WeaponsWithExtrasType = 
    | WeaponsType
    | OtherWeapon

export type ArmorWeight = `${ WeightClass }Armor`

export type OneHandedMainHand = 'Axe' | 'Dagger' | 'Mace' | 'Pistol' | 'Scepter' | 'Sword'
export type OneHandedOffHand = 'Focus' | 'Shield' | 'Torch' | 'Warhorn'
export type TwoHanded = 'Greatsword' | 'Hammer' | 'LongBow' | 'Rifle' | 'ShortBow' | 'Staff'
export type Aquatic = 'Harpoon' | 'Speargun' | 'Trident'
export type OtherWeapon = 'LargeBundle' | 'SmallBundle' | 'Toy' | 'ToyTwoHanded'

export type DamageType = 'Fire' | 'Ice' | 'Lightning' | 'Physical' | 'Choking'

export type Server = 'eu' | 'na'

export type SkillType = 
    | 'Bundle'
    | 'Elite'
    | 'Heal'
    | 'Monster'
    | 'Pet'
    | 'Profession'
    | 'Toolbelt'
    | 'Transform'
    | 'Utility'
    | 'Weapon'

export type SkillSlot = 
    | 'Downed_1'
    | 'Downed_2'
    | 'Downed_3'
    | 'Downed_4'
    | 'Pet'
    | 'Profession_1'
    | 'Profession_2'
    | 'Profession_3'
    | 'Profession_4'
    | 'Profession_5'
    | 'Utility'
    | 'Weapon_1'
    | 'Weapon_2'
    | 'Weapon_3'
    | 'Weapon_4'
    | 'Weapon_5'

export type MaterialType =  
    | 'cloth'
    | 'leather'
    | 'metal'