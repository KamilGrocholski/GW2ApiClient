import { BaseApi, ClientOptions } from "../baseAPI";
import { Material, MaterialId } from "./types";

export class MaterialsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMaterialsAllIds() {
        return this.get<MaterialId[]>('/v2/materials')
    }

    getMaterialsByIds(ids: MaterialId[]) {
        return this.get<Material[]>(`/v2/materials?ids=${ ids.join(',') }`)
    }

    getMaterialById(id: MaterialId) {
        return this.get<Material>(`/v2/materials/${ id }`)
    }
}