import { FinishersTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class FinishersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getFinishersAllIds(): Promise<FinishersTypes.FinishersIds> {
        return (await this.api.get<FinishersTypes.FinishersIds>('/v2/finishers')).data
    }

    public async getFinisherById(id: number): Promise<FinishersTypes.Finisher> {
        return (await this.api.get<FinishersTypes.Finisher>(`/v2/finishers/${ id }`)).data
    }

    public async getFinishersByIds(ids: number[]): Promise<FinishersTypes.Finishers> {
        return (await this.api.get<FinishersTypes.Finishers>(`/v2/finishers?ids=${ ids.join(',') }`)).data
    }
}