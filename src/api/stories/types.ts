import { Races } from "../common/types"

export type StoryId = number

export type Story = {
    id: StoryId
    season: string
    name: string
    description: string | null
    timeline: string
    level: number
    order?: number
    chapters: {
        name: string
    }[] | null  
    races?: Races[] | null
    flags?: string[] | null
}

export type SeasonId = string

export type SeasonStory = {
    id: SeasonId
    name: string
    order: number
    stories: StoryId[] | null
}