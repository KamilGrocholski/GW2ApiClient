export type MountTypeId = number

export type MountType = {
    id: MountTypeId
    name: string
    default_skin: number
    skins: number[] | null
    skills: number[] | null
}


export type MountSkinId = number

export type MountSkin = {
    id: MountSkinId
    name: string
    icon: string
    mount: string
    dye_slots: {
        color_id: number
        material: string
    }[] | null
}
