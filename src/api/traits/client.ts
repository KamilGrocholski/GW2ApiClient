import { BaseApi, ClientOptions } from "../baseAPI";
import { TraitId, Trait } from "./types";

export class TraitsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getTraitsAllIds() {
        return this.get<TraitId[]>('/v2/traits')
    }

    getTraitById(id: TraitId) {
        return this.get<Trait>(`/v2/traits/${ id }`)
    }

    getTraitsByIds(ids: TraitId[]) {
        return this.get<Trait[]>(`/v2/traits?ids=${ ids.join(',') }`)
    }
}