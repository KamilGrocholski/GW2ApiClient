import { HomeTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class HomeClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getNodes(): Promise<HomeTypes.Nodes> {
        return (await this.api.get<HomeTypes.Nodes>('/v2/home/nodes')).data
    }

    public async getCatsAllIds(): Promise<HomeTypes.CatsIds> {
        return (await this.api.get<HomeTypes.CatsIds>('/v2/home/cats')).data
    }

    public async getCatById(id: number): Promise<HomeTypes.Cats> {
        return (await this.api.get<HomeTypes.Cats>(`/v2/home?ids=${ id }`)).data
    }

    public async getCatsByIds(ids: number[]): Promise<HomeTypes.Cats> {
        return (await this.api.get<HomeTypes.Cats>(`/v2/home?ids=${ ids.join(',') }`)).data
    }
}