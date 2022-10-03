import { BaseApi, ClientOptions } from "../baseAPI";
import { TitleId, Title } from "./types";

export class TitlesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getTitlesAllIds() {
        return this.get<TitleId[]>('/v2/titles')
    }

    getTitleById(id: TitleId) {
        return this.get<Title>(`/v2/titles/${ id }`)
    }

    getTitlesByIds(ids: TitleId[]) {
        return this.get<Title[]>(`/v2/titles?ids=${ ids.join(',') }`)
    }
}