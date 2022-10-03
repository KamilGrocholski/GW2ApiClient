export type QuestId = number

export type Quest = {
    id: QuestId
    name: string
    level: number
    story: string
    goals: {
        active: string
        complete: string
    }[]
}