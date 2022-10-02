import { ItemsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class ItemsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getItemsAllIds(): Promise<ItemsTypes.ItemsIds> {
        return (await this.api.get<ItemsTypes.ItemsIds>('v2/items')).data
    }

    public async getItemById(id: number): Promise<ItemsTypes.Item> {
        return (await this.api.get<ItemsTypes.Item>(`/v2/items/${ id }`)).data
    }

    public async getItemsByIds(ids: number[]): Promise<ItemsTypes.Items> {
        return (await this.api.get<ItemsTypes.Items>(`v2/items?ids=${ ids.join(',') }`)).data
    }
}