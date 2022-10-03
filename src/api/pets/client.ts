import { BaseApi, ClientOptions } from "../baseAPI";
import { Pet, PetId } from "./types";

export class PetsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getPetsAllIds() {
        return this.get<PetId[]>('/v2/pets')
    }

    getPetsByIds(ids: PetId[]) {
        return this.get<Pet[]>(`/v2/pets?ids=${ ids.join(',') }`)
    }

    getPetById(id: PetId) {
        return this.get<Pet>(`/v2/pets/${ id }`)
    }
}