import { BaseApi, ClientOptions } from "../baseAPI";
import { WorldId, World } from "./types";

export class WorldsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getWorldsAllIds() {
        return this.get<WorldId[]>('/v2/worlds')
    }

    getWorldById(id: WorldId) {
        return this.get<World>(`/v2/worlds/${ id }`)
    }

    getWorldsByIds(ids: WorldId[]) {
        return this.get<World[]>(`/v2/worlds?ids=${ ids.join(',') }`)
    }
}