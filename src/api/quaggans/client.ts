import { BaseApi, ClientOptions } from "../baseAPI";
import { Quaggan, QuagganName } from "./types";

export class QuaggansClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getQuaggansAllNames() {
        return this.get<QuagganName>('/v2/quaggans')
    }

    getQuagganByName(name: QuagganName) {
        return this.get<Quaggan>(`/v2/quaggans/${ name }`)
    }
}