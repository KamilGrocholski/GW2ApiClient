import { BaseApi, ClientOptions } from "../baseAPI";
import { Profession, ProfessionId } from "./types";

export class ProfessionsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getProfessionsAllIds() {
        return this.get<ProfessionId[]>('/v2/professions')
    }

    getProfessionById(id: ProfessionId) {
        return this.get<Profession>(`/v2/professions/${ id }`)
    }

    getProfessionsByIds(ids: ProfessionId[]) {
        return this.get<Profession[]>(`/v2/professions?ids=${ ids.join(',') }`)
    }
}