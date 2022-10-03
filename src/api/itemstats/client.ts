import { BaseApi, ClientOptions } from "../baseAPI";
import { ItemStat, ItemStatId } from "./types";

export class ItemStatsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getItemStatsAllIds() {
        return this.get<ItemStatId[]>('/v2/itemstats')
    }

    getItemStatById(id: ItemStatId) {
        return this.get<ItemStat>(`/v2/itemstats/${ id }`)
    }

    getItemStatsByIds(ids: ItemStatId[]) {
        return this.get<ItemStat>(`/v2/itemstats?ids=${ ids.join(',') }`)
    }
}