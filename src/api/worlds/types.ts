export type WorldId = number

export type World = {
    id: WorldId
    name: string
    population: 'Low' | 'Medium' | 'High' | 'VeryHigh' | 'Full'
}