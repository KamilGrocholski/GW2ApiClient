import { BaseApi, ClientOptions } from "../baseAPI";
import { WorldBossId } from "./types";

export class WorldBossesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getWorldBossesAllIds() {
        return this.get<WorldBossId[]>('/v2/worldbosses')
    }
}