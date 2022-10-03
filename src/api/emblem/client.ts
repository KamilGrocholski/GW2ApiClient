import { BaseApi, ClientOptions } from "../baseAPI";
import { BackgroundId, Background } from "./types";

export class EmblemClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getBackgroundsAllIds() {
        return this.get<BackgroundId[]>('/v2/emblem/backgrounds')
    }

    getBackgroundById(id: BackgroundId) {
        return this.get<Background>(`/v2/emblem/backgrounds/${ id }`)
    }

    getBackgroundsByIds(ids: BackgroundId[]) {
        return this.get<Background[]>(`v2/emblem/backgrounds?ids=${ ids.join(',') }`)
    }
}