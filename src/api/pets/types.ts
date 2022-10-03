export type PetId = number

export type Pet = {
    id: PetId
    name: string
    description: string | null
    icon: string
    skills: {
        id: number
    }[] | null
}
