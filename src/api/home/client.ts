import { BaseApi, ClientOptions } from "../baseAPI";
import { Cat, CatId } from "./types";

export class HomeClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getNodes() {
        return this.get<Node[]>('/v2/home/nodes')
    }

    getCatsAllIds() {
        return this.get<CatId[]>('/v2/home/cats')
    }

    getCatById(id: CatId) {
        return this.get<Cat[]>(`/v2/home/cats?ids=${ id }`)
    }

    getCatsByIds(ids: CatId[]) {
        return this.get<Cat[]>(`/v2/home/cats?ids=${ ids.join(',') }`)
    }
}