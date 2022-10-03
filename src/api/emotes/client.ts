import { BaseApi, ClientOptions } from "../baseAPI";
import { EmoteId, Emote } from "./types";

export class EmotesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getEmotesAllIds() {
        return this.get<EmoteId[]>('/v2/emotes')
    }

    getEmoteById(id: EmoteId) {
        return this.get<Emote>(`/v2/emotes/${ id }`)
    }

    getEmotesByIds(ids: EmoteId[]) {
        return this.get<Emote[]>(`/v2/emotes?ids=${ ids.join(',') }`)
    }
}