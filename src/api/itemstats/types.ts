import { Attributes } from "../common/types"

export type ItemStatId = number

export type ItemStat = {
    id: number
    name: string | null
    attributes: {
        attribute: Attributes
        multiplier: number
        value: number
    }[] | null
}