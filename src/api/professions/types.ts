import { Professions, WeaponsType } from "../common/types"

export type ProfessionId = string

export type Profession = {
    id: ProfessionId
    name: Professions
    code: number
    icon: string 
    icon_big: string
    specializations: number[] | null
    training: {
        id: number
        category: 'Skills' | 'Specializations' | 'EliteSpecializations'
        name: string
        track: {
            cost: number
            type: 'Trait' | 'Skill'
            skill_id?: number | null
            trait_id?: number | null
        }[] | null
    }[] | null
    weapons: Record<WeaponsType, {
        flags: ('Mainhand' | 'Offhand' | 'TwoHand' | 'Aquatic')[] | null
        specialization?: number
        skills: {
            id: number
            slot: string
            offhand?: string
            attunement?: string
            type: string
            source?: string
        }[] | null
    }> | undefined
    flags: ('NoRacialSkills' | 'NoWeaponSwap')[] | null
    skills_by_palette: [number, number]
}