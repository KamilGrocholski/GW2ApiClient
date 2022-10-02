import { PetsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class PetsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getPetsAllIds(): Promise<PetsTypes.PetsIds> {
        return (await this.api.get<PetsTypes.PetsIds>('/v2/pets')).data
    }

    public async getPetsByIds(ids: number[]): Promise<PetsTypes.Pets> {
        return (await this.api.get<PetsTypes.Pets>(`/v2/pets?ids=${ ids.join(',') }`)).data
    }

    public async getPetById(id: number): Promise<PetsTypes.Pet> {
        return (await this.api.get<PetsTypes.Pet>(`/v2/pets/${ id }`)).data
    }
}