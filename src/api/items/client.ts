import { BaseApi, ClientOptions } from "../baseAPI";
import { Item, ItemId } from "./types";

export class ItemsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getItemsAllIds() {
        return this.get<ItemId[]>('v2/items')
    }

    getItemById(id: ItemId) {
        return this.get<Item>(`/v2/items/${ id }`)
    }

    getItemsByIds(ids: ItemId[]) {
        return this.get<Item[]>(`v2/items?ids=${ ids.join(',') }`)
    }
}