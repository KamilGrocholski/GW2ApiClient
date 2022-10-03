import { Professions, Races } from "../common/types"

export type AnswerId = string

export type Answer = {
    id: AnswerId
    title: string
    description: string
    journal: string
    question: number
    professions?: (Professions)[]    
    races?: (Races)[]
}

export type QuestionId = number

export type Question = {
    id: QuestionId
    title: string
    description: string
    answers: Answer['id'][]
    order: number
    races: (Races)[]
    professions: (Professions)[]
}
