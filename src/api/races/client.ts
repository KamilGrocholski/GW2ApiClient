import { BaseApi, ClientOptions } from "../baseAPI";
import { RaceId, Race } from "./types";

export class RacesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getRacesAllIds() {
        return this.get<RaceId[]>('/v2/races')
    }

    getRaceById(id: RaceId) {
        return this.get<Race>(`/v2/races/${ id }`)
    }

    getRacesByIds(ids: RaceId[]) {
        return this.get<Race[]>(`/v2/races?ids=${ ids.join(',') }`)
    }
}