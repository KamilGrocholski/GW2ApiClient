import { BuildTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class BuildClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getCurrentBuildIdOfTheGame(): Promise<BuildTypes.CurrentBuildIdOfTheGame> {
        return (await this.api.get<BuildTypes.CurrentBuildIdOfTheGame>('/v2/build')).data
    }
}