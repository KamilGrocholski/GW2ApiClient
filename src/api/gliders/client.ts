import { GlidersTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class GlidersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getGlidersAllIds(): Promise<GlidersTypes.GlidersIds> {
        return (await this.api.get<GlidersTypes.GlidersIds>('/v2/Gliders')).data
    }

    public async getGliderById(id: number): Promise<GlidersTypes.Glider> {
        return (await this.api.get<GlidersTypes.Glider>(`/v2/Gliders/${ id }`)).data
    }

    public async getGlidersByIds(ids: number[]): Promise<GlidersTypes.Gliders> {
        return (await this.api.get<GlidersTypes.Gliders>(`/v2/Gliders?ids=${ ids.join(',') }`)).data
    }
}