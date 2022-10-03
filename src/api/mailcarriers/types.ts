export type MailCarrierId = number

export type MailCarrier = {
    id: MailCarrierId
    unlock_items?: number[] | null
    order: number
    icon: string | null
    name: string | null 
    flags: string[] | null
}
