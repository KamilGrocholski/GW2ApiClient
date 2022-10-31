import { BaseApi, ClientOptions } from "../baseAPI";
import { ColorId, Color } from "./types";

export class ColorsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    /**
     * Returns a list of all colors ids. 
     * https://wiki.guildwars2.com/wiki/API:2/colors
     * @returns 
     */
    getDyeColorsAllIds() {
        return this.get<ColorId[]>('/v2/colors')
    }

    /**
     * This resource returns all dye colors in the game, including localized names and their color component information.
     * https://wiki.guildwars2.com/wiki/API:2/colors
     * @param id 
     * @returns 
     */
    getDyeColorById(id: ColorId) {
        return this.get<Color>(`/v2/colors/${ id }`)
    }

    /**
     * This resource returns all dye colors in the game, including localized names and their color component information.
     * https://wiki.guildwars2.com/wiki/API:2/colors
     * @param ids 
     * @returns 
     */
    getDyeColorsByIds(ids: ColorId[]) {
        return this.get<Color[]>(`/v2/colors?ids=${ ids.join(',') }`)
    }
}