import { BaseApi, ClientOptions } from "../baseAPI";
import { LegendsTypes } from ".";

export class LegendsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getLegendsAllIds(): Promise<LegendsTypes.LegendsIds> {
        return (await this.api.get<LegendsTypes.LegendsIds>('/v2/legends')).data
    }

    public async getLegendById(id: string): Promise<LegendsTypes.Legend> {
        return (await this.api.get<LegendsTypes.Legend>(`/v2/legends/${ id }`)).data
    }

    public async getLegendsByIds(ids: string[]): Promise<LegendsTypes.Legends> {
        return (await this.api.get<LegendsTypes.Legends>(`/v2/legends?ids=${ ids.join(',') }`)).data
    }
}