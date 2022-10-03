import { BaseApi, ClientOptions } from "../baseAPI";
import { CurrentBuildIdOfTheGame } from "./types";

export class BuildClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getCurrentBuildIdOfTheGame() {
        return this.get<CurrentBuildIdOfTheGame>('/v2/build')
    }
}