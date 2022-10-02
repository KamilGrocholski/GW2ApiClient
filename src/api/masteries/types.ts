export type MasteryId = number
export type MasteriessIds = MasteryId[]

export type Mastery = {
    id: MasteryId
    name: string
    requirement: string
    order: number
    background: string
    region: string
    levels: {
        name: string
        description: string
        instruction: string
        icon: string
        point_cost: number
        exp_cost: number
    }[]
}

export type Masteriess = Mastery[]