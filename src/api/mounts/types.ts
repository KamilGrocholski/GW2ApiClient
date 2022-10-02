export type MountTypeId = number
export type MountTypesIds = MountTypeId[]

export type MountType = {
    id: MountTypeId
    name: string
    default_skin: number
    skins: number[] | null
    skills: number[] | null
}

export type MountTypes = MountType[]

export type MountSkinId = number
export type MountSkinsIds = MountSkinId[]

export type MountSkin = {
    id: string
    name: string
    icon: string
    mount: string
    dye_slots: {
        color_id: number
        material: string
    }[] | null
}

export type MountSkins = MountSkin[]