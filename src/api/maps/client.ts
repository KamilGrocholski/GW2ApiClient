import { BaseApi, ClientOptions } from "../baseAPI";
import { MapId, Map } from "./types";

export class MapsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMapsAllIds() {
        return this.get<MapId[]>('/v2/maps')
    }

    getMapsByIds(ids: MapId[]) {
        return this.get<Map[]>(`/v2/maps?ids=${ ids.join(',') }`)
    }

    getMapById(id: MapId) {
        return this.get<Map>(`/v2/maps/${ id }`)
    }
}