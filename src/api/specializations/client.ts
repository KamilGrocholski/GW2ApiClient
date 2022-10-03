import { BaseApi, ClientOptions } from "../baseAPI";
import { SpecializationId, Specialization } from "./types";

export class SpecializationsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getSpecializationsAllIds() {
        return this.get<SpecializationId[]>('/v2/specializations')
    }

    getSpecializationById(id: SpecializationId) {
        return this.get<Specialization>(`/v2/specializations/${ id }`)
    }

    getSpecializationsByIds(ids: SpecializationId[]) {
        return this.get<Specialization[]>(`/v2/specializations?ids=${ ids.join(',') }`)
    }
}