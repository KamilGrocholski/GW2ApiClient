import { CurrenciesTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class CurrenciesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getCurrenciesAllIds(): Promise<CurrenciesTypes.CurrenciesIds> {
        return (await this.api.get<CurrenciesTypes.CurrenciesIds>('/v2/currencies')).data
    }

    public async getCurrencyById(id: number): Promise<CurrenciesTypes.Currency> {
        return (await this.api.get<CurrenciesTypes.Currency>(`/v2/currencies/${ id }`)).data
    }

    public async getCurrenciesByIds(ids: number[]): Promise<CurrenciesTypes.Currencies> {
        return (await this.api.get<CurrenciesTypes.Currencies>(`/v2/currencies?ids=${ ids.join(',') }`)).data
    }
}