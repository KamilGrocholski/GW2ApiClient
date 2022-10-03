import { Professions, SkillSlot, SkillType, WeaponsType } from "../common/types"

export type SkillId = number

export type Skill = {
    id: SkillId
    name: string
    description: string
    icon: string
    chat_link: string
    type?: SkillType
    weapon_type?: WeaponsType | 'None'
    professions: Professions[] | null
    slot?: SkillSlot
    facts?: (AttributeAdjust 
        | Buff 
        | ComboField 
        | ComboFinisher 
        | Damage 
        | Distance 
        | Duration 
        | Heal 
        | HealingAdjust 
        | NoData | Number 
        | Percent 
        | PrefixedBuff 
        | Radius 
        | Range 
        | Recharge 
        | StunBreak 
        | Time 
        | Unblockable
    )[]
    traited_facts?: {
        text: string
        icon?: string 
        type: SkillFactType
        requires_trait: number
        overrides?: number
        hit_count?: number
    }[] | null
    categories?: ('DualWield' | 'StealthAttack')[] | null
    attunement?: string
    cost?: number
    dual_wield?: string
    flip_skill?: number
    initiative?: number
    next_chain?: number
    prev_chain?: number
    transform_skills?: number[] | null
    bundle_skills?: number[] | null
    toolbelt_skill?: number
    flags?: ('GroundTargeted' | 'NoUnderwater')[] | null
}

export type SkillFactType =
    | 'AttributeAdjust'
    | 'Buff'
    | 'ComboField'
    | 'ComboFinisher'
    | 'Damage'
    | 'Distance'
    | 'Duration'
    | 'Heal'
    | 'HealingAdjust'
    | 'NoData'
    | 'Number'
    | 'Percent'
    | 'PrefixedBuff'
    | 'Radius'
    | 'Range'
    | 'Recharge'
    | 'StunBreak'
    | 'Time'
    | 'Unblockable'

type FactDependingObjectBase = {
    text: string
    type: string
    icon?: string
}

type AttributeAdjust = {
    value: number
    target: string
}

type Buff = {
    duration?: number
    status: string
    description?: string
    apply_count?: number
} 

type ComboField = {
    field_type: 'Air' | 'Dark' | 'Fire' | 'Ice' | 'Light' | 'Lightning' | 'Poison' | 'Smoke' | 'Ethereal' | 'Water'
}

type ComboFinisher ={
    percent: number
    finisher_type: 'Blast' | 'Leap' | 'Projectile' | 'Whirl'
}

type Damage = {
    hit_count: number
    dmg_multiplier: number
}

type Distance = {
    distance: number
}


type Duration = {
    duration: number
}

type Heal = {
    hit_count: number
}

type HealingAdjust = {
    hit_count: number
}

type NoData = {
    value: number
}

type Number = {
    percent: number
}

type Percent = {
    percent: number
}

type PrefixedBuff = {
    prefix: {
      text: string
      icon?: string
      status?: string
      description?: string
    }
} & Buff

type Radius = {
    distance: number
}

type Range = {
    value: number
}

type Recharge = {
    value: number
}

type StunBreak = {
    value: true
}

type Time = {
    duration: number
}

type Unblockable = {
    value: true
}