import { BaseApi, ClientOptions } from "../baseAPI";
import { ColorId, Color } from "./types";

export class ColorsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    
    getDyeColorsAllIds() {
        return this.get<ColorId[]>('/v2/colors')
    }

    getDyeColorById(id: ColorId) {
        return this.get<Color>(`/v2/colors/${ id }`)
    }

    getDyeColorsByIds(ids: ColorId[]) {
        return this.get<Color[]>(`/v2/colors?ids=${ ids.join(',') }`)
    }
}