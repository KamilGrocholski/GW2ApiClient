import { BaseApi, ClientOptions } from "../baseAPI";
import { DungeonId, Dungeon } from "./types";

export class DungeonsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getDungeonsAllIds() {
        return this.get<DungeonId[]>('/v2/dungeons')
    }

    getDungeonById(id: DungeonId) {
        return this.get<Dungeon>(`/v2/dungeons/${ id }`)
    }
}