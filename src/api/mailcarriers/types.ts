export type MailCarrierId = number
export type MailCarriersIds = MailCarrierId[]

export type MailCarrier = {
    id: MailCarrierId
    unlock_items?: number[] | null
    order: number
    icon: string | null
    name: string | null 
    flags: string[] | null
}

export type MailCarriers = MailCarrier[]