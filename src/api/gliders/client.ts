import { BaseApi, ClientOptions } from "../baseAPI";
import { Glider, GliderId } from "./types";

export class GlidersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getGlidersAllIds() {
        return this.get<GliderId[]>('/v2/Gliders')
    }

    getGliderById(id: GliderId) {
        return this.get<Glider>(`/v2/Gliders/${ id }`)
    }

    getGlidersByIds(ids: GliderId[]) {
        return this.get<Glider[]>(`/v2/Gliders?ids=${ ids.join(',') }`)
    }
}