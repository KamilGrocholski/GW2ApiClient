import { Professions } from "../common/types"

export type SpecializationId = number

export type Specialization = {
    id: SpecializationId
    name: string
    profession: Professions
    elite: boolean
    icon: string
    background: string
    minor_traits: SpecializationId[]
    major_traits: SpecializationId[]
}