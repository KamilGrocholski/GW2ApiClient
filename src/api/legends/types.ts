export type LegendId = string

export type Legend = {
    id: LegendId
    code: number
    swap: number
    heal: number
    elite: number
    utilities: number[] | null
}
