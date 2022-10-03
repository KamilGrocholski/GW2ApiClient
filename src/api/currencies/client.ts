import { BaseApi, ClientOptions } from "../baseAPI";
import { CurrencyId, Currency } from "./types";

export class CurrenciesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getCurrenciesAllIds() {
        return this.get<CurrencyId[]>('/v2/currencies')
    }

    getCurrencyById(id: CurrencyId) {
        return this.get<Currency>(`/v2/currencies/${ id }`)
    }

    getCurrenciesByIds(ids: number[]) {
        return this.get<Currency[]>(`/v2/currencies?ids=${ ids.join(',') }`)
    }
}