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

export type ProfessionsLowerCase =
    | 'guardian'
    | 'revenant'
    | 'warrior'
    | 'engineer'
    | 'ranger'
    | 'thief'
    | 'elementalist'
    | 'mesmer'
    | 'necromancer'

export type Races =
    | 'Asura'
    | 'Charr'
    | 'Human'
    | 'Norn'
    | 'Sylvari'

export type Genders =
    | 'Male'
    | 'Female'


export type Disciplines =
    | 'Armorsmith'
    | 'Artificer'
    | 'Chef'
    | 'Huntsman'
    | 'Jeweler'
    | 'Leatherworker'
    | 'Scribe'
    | 'Tailor'
    | 'Weaponsmith'

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