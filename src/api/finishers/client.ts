import { BaseApi, ClientOptions } from "../baseAPI";
import { Finisher, FinisherId } from "./types";

export class FinishersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getFinishersAllIds() {
        return this.get<FinisherId[]>('/v2/finishers')
    }

    getFinisherById(id: FinisherId) {
        return this.get<Finisher>(`/v2/finishers/${ id }`)
    }

    getFinishersByIds(ids: FinisherId[]) {
        return this.get<Finisher[]>(`/v2/finishers?ids=${ ids.join(',') }`)
    }
}