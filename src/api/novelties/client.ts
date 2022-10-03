import { BaseApi, ClientOptions } from "../baseAPI";
import { Novelty, NoveltyId } from "./types";

export class NoveltiesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getNoveltiesAllIds() {
        return this.get<NoveltyId[]>('/v2/novelties')
    }

    getNoveltiesByIds(ids: NoveltyId[]) {
        return this.get<Novelty[]>(`/v2/novelties?ids=${ ids.join(',') }`)
    }

    getNoveltyById(id: NoveltyId) {
        return this.get<Novelty>(`/v2/novelties/${ id }`)
    }
}