import { BaseApi, ClientOptions } from "../baseAPI";
import { Mini, MiniId } from "./types";

export class MinisClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMinisAllIds() {
        return this.get<MiniId[]>('/v2/minis')
    }

    getMinisByIds(ids: MiniId[]) {
        return this.get<Mini[]>(`/v2/minis?ids=${ ids.join(',') }`)
    }

    getMiniById(id: MiniId) {
        return this.get<Mini>(`/v2/minis/${ id }`)
    }
}