import { BaseApi, ClientOptions } from "../baseAPI";
import { SkinId, Skin } from "./types";

export class SkinsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getSkinsAllIds() {
        return this.get<SkinId[]>('/v2/skins')
    }

    getSkinById(id: SkinId) {
        return this.get<Skin>(`/v2/skins/${ id }`)
    }

    getSkinsByIds(ids: SkinId[]) {
        return this.get<Skin[]>(`/v2/skins?ids=${ ids.join(',') }`)
    }
}