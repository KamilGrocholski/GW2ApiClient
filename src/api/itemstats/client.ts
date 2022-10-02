import { BaseApi, ClientOptions } from "../baseAPI";
import { ItemStatsTypes } from ".";

export class ItemStatsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getItemStatsAllIds(): Promise<ItemStatsTypes.ItemStatsIds> {
        return (await this.api.get<ItemStatsTypes.ItemStatsIds>('/v2/itemstats')).data
    }

    public async getItemStatById(id: number): Promise<ItemStatsTypes.ItemStat> {
        return (await this.api.get<ItemStatsTypes.ItemStat>(`/v2/itemstats/${ id }`)).data
    }

    public async getItemStatsByIds(ids: number[]): Promise<ItemStatsTypes.ItemStats> {
        return (await this.api.get<ItemStatsTypes.ItemStats>(`/v2/itemstats?ids=${ ids.join(',') }`)).data
    }
}