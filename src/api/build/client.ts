import { BaseApi, ClientOptions } from "../baseAPI";
import { CurrentBuildIdOfTheGame } from "./types";

export class BuildClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    /**
     * This resource returns the current build id of the game.
     * https://wiki.guildwars2.com/wiki/API:2/build
     * @returns 
     */
    getCurrentBuildIdOfTheGame() {
        return this.get<CurrentBuildIdOfTheGame>('/v2/build')
    }
}