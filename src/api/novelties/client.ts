import { NoveltiesTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class NoveltiesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getNoveltiesAllIds(): Promise<NoveltiesTypes.NoveltiesIds> {
        return (await this.api.get<NoveltiesTypes.NoveltiesIds>('/v2/novelties')).data
    }

    public async getNoveltiesByIds(ids: number[]): Promise<NoveltiesTypes.Novelties> {
        return (await this.api.get<NoveltiesTypes.Novelties>(`/v2/novelties?ids=${ ids.join(',') }`)).data
    }

    public async getNoveltyById(id: number): Promise<NoveltiesTypes.Novelty> {
        return (await this.api.get<NoveltiesTypes.Novelty>(`/v2/novelties/${ id }`)).data
    }
}