import { BaseApi, ClientOptions } from "../baseAPI";
import { SubTokenParams } from "./types";

export class SubTokenClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async create(params: SubTokenParams) {
        const { expire, permissions, urls} = params
        const ISO8601 = expire.toISOString()
        return (await this.api.get(`/v2/createsubtoken?expire=${ ISO8601 }&permissions=${ permissions.join(',') }&urls=${ urls?.join(',') }`)).data
    }
}