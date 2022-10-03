import { Professions } from "../common/types"

export type TitleId = number

export type Title = {
    id: TitleId
    name: string
    achievement: number
    achievements: number[] | null    
    ap_required: number
}