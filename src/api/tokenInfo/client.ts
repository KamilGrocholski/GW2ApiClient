import { BaseApi, ClientOptions } from "../baseAPI";
import { Token } from "./types";

export class TokenInfoClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getTokenInfo() {
        return this.get<Token>('/v2/tokeninfo')
    }
}