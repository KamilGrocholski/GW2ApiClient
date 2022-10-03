import { Skill } from "../skills/types"

export type TraitId = number

export type Trait = {
    id: TraitId
    name: string
    icon: string
    description: string
    specializations: number
    tier: number
    slot: 'Major' | 'Minor'
    facts?: Skill['facts']
    traited_facts?: Skill['traited_facts']
    skills?: Skill[]
}