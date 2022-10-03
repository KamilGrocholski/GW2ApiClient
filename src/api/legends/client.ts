import { BaseApi, ClientOptions } from "../baseAPI";
import { Legend, LegendId } from "./types";

export class LegendsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getLegendsAllIds() {
        return this.get<LegendId[]>('/v2/legends')
    }

    getLegendById(id: string) {
        return this.get<Legend>(`/v2/legends/${ id }`)
    }

    getLegendsByIds(ids: LegendId[]) {
        return this.get<Legend[]>(`/v2/legends?ids=${ ids.join(',') }`)
    }
}