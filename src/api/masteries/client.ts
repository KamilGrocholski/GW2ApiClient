import { BaseApi, ClientOptions } from "../baseAPI";
import { MasteryId, Mastery } from "./types";

export class MasteriessClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMasteriessAllIds() {
        return this.get<MasteryId[]>('/v2/masteries')
    }

    getMasteriessByIds(ids: MasteryId[]) {
        return this.get<Mastery[]>(`/v2/masteries?ids=${ ids.join(',') }`)
    }

    getMasteryById(id: MasteryId) {
        return this.get<Mastery>(`/v2/masteries/${ id }`)
    }
}