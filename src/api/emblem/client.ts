import { EmblemTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class EmblemClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getBackgroundsAllIds(): Promise<EmblemTypes.BackgroundsIds> {
        return (await this.api.get<EmblemTypes.BackgroundsIds>('/v2/emblem/backgrounds')).data
    }

    public async getBackgroundById(id: number): Promise<EmblemTypes.Background> {
        return (await this.api.get<EmblemTypes.Background>(`/v2/emblem/backgrounds/${ id }`)).data
    }

    public async getBackgroundsByIds(ids: number[]): Promise<EmblemTypes.Backgrounds> {
        return (await this.api.get<EmblemTypes.Backgrounds>(`v2/emblem/backgrounds?ids=${ ids.join(',') }`)).data
    }
}