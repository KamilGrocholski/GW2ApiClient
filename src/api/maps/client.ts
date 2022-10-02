import { MapsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class MapsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMapsAllIds(): Promise<MapsTypes.MapsIds> {
        return (await this.api.get<MapsTypes.MapsIds>('/v2/maps')).data
    }

    public async getMapsByIds(ids: number[]): Promise<MapsTypes.Maps> {
        return (await this.api.get<MapsTypes.Maps>(`/v2/maps?ids=${ ids.join(',') }`)).data
    }

    public async getMapById(id: number): Promise<MapsTypes.Map> {
        return (await this.api.get<MapsTypes.Map>(`/v2/maps/${ id }`)).data
    }
}