import { OutfitsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class OutfitsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getOutfitsAllIds(): Promise<OutfitsTypes.OutfitsIds> {
        return (await this.api.get<OutfitsTypes.OutfitsIds>('/v2/outfits')).data
    }

    public async getOutfitsByIds(ids: number[]): Promise<OutfitsTypes.Outfits> {
        return (await this.api.get<OutfitsTypes.Outfits>(`/v2/outfits?ids=${ ids.join(',') }`)).data
    }

    public async getOutfitById(id: number): Promise<OutfitsTypes.Outfit> {
        return (await this.api.get<OutfitsTypes.Outfit>(`/v2/outfits/${ id }`)).data
    }
}