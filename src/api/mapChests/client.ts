import { BaseApi, ClientOptions } from "../baseAPI";
import { MapChestsTypes } from ".";

export class MapChestsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMapChestsAllIds(): Promise<MapChestsTypes.MapChestsIds> {
        return (await this.api.get<MapChestsTypes.MapChestsIds>('/v2/mapchests')).data
    }
}