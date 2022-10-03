import { BaseApi, ClientOptions } from "../baseAPI";
import { MountTypeId, MountType, MountSkinId, MountSkin } from "./types";

export class MountsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getTypesAllIds() {
        return this.get<MountTypeId[]>('/v2/mounts/types')
    }

    getTypesByIds(ids: MountTypeId[]) {
        return this.get<MountType[]>(`/v2/mounts/types?ids=${ ids.join(',') }`)
    }

    getTypeById(id: MountTypeId) {
        return this.get<MountType>(`/v2/mounts/types/${ id }`)
    }

    getSkinsAllIds() {
        return this.get<MountSkinId[]>('/v2/mounts/skins')
    }

    getSkinsByIds(ids: MountSkinId[]) {
        return this.get<MountSkin[]>(`/v2/mounts/skins?ids=${ ids.join(',') }`)
    }

    getSkinById(id: MountSkin) {
        return this.get<MountSkin>(`/v2/mounts/skins/${ id }`)
    }
}