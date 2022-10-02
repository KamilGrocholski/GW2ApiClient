import { MinisTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class MinisClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMinisAllIds(): Promise<MinisTypes.MinisIds> {
        return (await this.api.get<MinisTypes.MinisIds>('/v2/minis')).data
    }

    public async getMinisByIds(ids: number[]): Promise<MinisTypes.Minis> {
        return (await this.api.get<MinisTypes.Minis>(`/v2/minis?ids=${ ids.join(',') }`)).data
    }

    public async getMiniById(id: number): Promise<MinisTypes.Mini> {
        return (await this.api.get<MinisTypes.Mini>(`/v2/minis/${ id }`)).data
    }
}