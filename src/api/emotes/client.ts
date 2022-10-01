import { EmotesTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class EmotesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getEmotesAllIds(): Promise<EmotesTypes.EmotesIds> {
        return (await this.api.get<EmotesTypes.EmotesIds>('/v2/emotes')).data
    }

    public async getEmoteById(id: string): Promise<EmotesTypes.Emote> {
        return (await this.api.get<EmotesTypes.Emote>(`/v2/emotes/${ id }`)).data
    }

    public async getEmotesByIds(ids: string[]): Promise<EmotesTypes.Emotes> {
        return (await this.api.get<EmotesTypes.Emotes>(`/v2/emotes?ids=${ ids.join(',') }`)).data
    }
}