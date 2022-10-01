import { ColorsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class ColorsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    
    public async getDyeColorsAllIds(): Promise<ColorsTypes.ColorsIds> {
        return (await this.api.get<ColorsTypes.ColorsIds>('/v2/colors')).data
    }

    public async getDyeColorById(id: number): Promise<ColorsTypes.Color> {
        return (await this.api.get<ColorsTypes.Color>(`/v2/colors/${ id }`)).data
    }

    public async getDyeColorsByIds(ids: number[]): Promise<ColorsTypes.Colors> {
        return (await this.api.get<ColorsTypes.Colors>(`/v2/colors?ids=${ ids.join(',') }`)).data
    }
}