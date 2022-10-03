import { BaseApi, ClientOptions } from "../baseAPI";
import { Outfit, OutfitId } from "./types";

export class OutfitsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getOutfitsAllIds() {
        return this.get<OutfitId[]>('/v2/outfits')
    }

    getOutfitsByIds(ids: number[]) {
        return this.get<Outfit[]>(`/v2/outfits?ids=${ ids.join(',') }`)
    }

    getOutfitById(id: number) {
        return this.get<Outfit>(`/v2/outfits/${ id }`)
    }
}