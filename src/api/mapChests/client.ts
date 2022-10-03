import { BaseApi, ClientOptions } from "../baseAPI";
import { MapChestId } from "./types";

export class MapChestsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMapChestsAllIds() {
        return this.get<MapChestId[]>('/v2/mapchests')
    }
}