import { MaterialsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class MaterialsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMaterialsAllIds(): Promise<MaterialsTypes.MaterialsIds> {
        return (await this.api.get<MaterialsTypes.MaterialsIds>('/v2/materials')).data
    }

    public async getMaterialsByIds(ids: number[]): Promise<MaterialsTypes.Materials> {
        return (await this.api.get<MaterialsTypes.Materials>(`/v2/materials?ids=${ ids.join(',') }`)).data
    }

    public async getMaterialById(id: number): Promise<MaterialsTypes.Material> {
        return (await this.api.get<MaterialsTypes.Material>(`/v2/materials/${ id }`)).data
    }
}