import { BaseApi, ClientOptions } from "../baseAPI";
import { TimeGatedRecipe } from "./types";

export class DailyCraftingClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getTimeGatedRecipes() {
        return this.get<TimeGatedRecipe[]>('/v2/dailycrafting')
    }
}