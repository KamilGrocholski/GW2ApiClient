import { DailyCraftingTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class DailyCraftingClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getTimeGatedRecipes(): Promise<DailyCraftingTypes.TimeGatedRecipes> {
        return (await this.api.get<DailyCraftingTypes.TimeGatedRecipes>('/v2/dailycrafting')).data
    }
}