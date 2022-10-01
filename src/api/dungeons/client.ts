import { DungeonsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class DungeonsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getDungeonsAllIds(): Promise<DungeonsTypes.DungeonsIds> {
        return (await this.api.get<DungeonsTypes.DungeonsIds>('/v2/dungeons')).data
    }

    public async getDungeonById(id: string): Promise<DungeonsTypes.Dungeon> {
        return (await this.api.get<DungeonsTypes.Dungeon>(`/v2/dungeons/${ id }`)).data
    }
}