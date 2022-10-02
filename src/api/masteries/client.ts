import { MasteriessTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class MasteriessClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMasteriessAllIds(): Promise<MasteriessTypes.MasteriessIds> {
        return (await this.api.get<MasteriessTypes.MasteriessIds>('/v2/masteries')).data
    }

    public async getMasteriessByIds(ids: number[]): Promise<MasteriessTypes.Masteriess> {
        return (await this.api.get<MasteriessTypes.Masteriess>(`/v2/masteries?ids=${ ids.join(',') }`)).data
    }

    public async getMasteryById(id: number): Promise<MasteriessTypes.Mastery> {
        return (await this.api.get<MasteriessTypes.Mastery>(`/v2/masteries/${ id }`)).data
    }
}