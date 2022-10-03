import { BaseApi, ClientOptions } from "../baseAPI";
import { RaidId, Raid } from "./types";

export class RaidsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getRaidsAllIds() {
        return this.get<RaidId[]>('/v2/raids')
    }

    getRaidById(id: RaidId) {
        return this.get<Raid>(`/v2/raids/${ id }`)
    }

    getRaidsByIds(ids: RaidId[]) {
        return this.get<Raid[]>(`/v2/raids?ids=${ ids.join(',') }`)
    }
}