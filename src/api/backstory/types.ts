import { Professions, Races } from "../common/types"

export type AnswersIds = Answer['id'][]

export type Answer = {
    id: string
    title: string
    description: string
    journal: string
    question: number
    professions?: (Professions)[]    
    races?: (Races)[]
}

export type Answers = Answer[]

export type QuestionIds = Question['id'][] 

export type Question = {
    id: number
    title: string
    description: string
    answers: Answer['id'][]
    order: number
    races: (Races)[]
    professions: (Professions)[]
}

export type Questions = Question[]