import { CommerceTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class CommerceClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getDelivery(): Promise<CommerceTypes.Delivery> {
        return (await this.api.get<CommerceTypes.Delivery>('/v2/commerce/delivery')).data
    }

    public async getExchangeCoinsRate(quantity: number): Promise<CommerceTypes.ExchangeRate> {
        return (await this.api.get<CommerceTypes.ExchangeRate>(`/v2/commerce/exchange/coins?quantity=${ quantity }`)).data
    }

    public async getExchangeGemsRate(quantity: number): Promise<CommerceTypes.ExchangeRate> {
        return (await this.api.get<CommerceTypes.ExchangeRate>(`/v2/commerce/exchange/gems?quantity=${ quantity }`)).data
    }

    public async getListingsAllIds(): Promise<CommerceTypes.ListingsIds> {
        return (await this.api.get<CommerceTypes.ListingsIds>('/v2/commerce/listings')).data
    }

    public async getListingsByIds(ids: number[]): Promise<CommerceTypes.Listings> {
        return (await this.api.get<CommerceTypes.Listings>(`/v2/commerce/listings?ids=${ ids.join(',') }`)).data
    }

    public async getListingById(id: number): Promise<CommerceTypes.Listing> {
        return (await this.api.get<CommerceTypes.Listing>(`/v2/commerce/listings/${ id }`)).data
    }

    public async getPricesAllIds(): Promise<CommerceTypes.PricesIds> {
        return (await this.api.get<CommerceTypes.PricesIds>('/v2/commerce/prices')).data
    }

    public async getPricesByIds(ids: number[]): Promise<CommerceTypes.Listings> {
        return (await this.api.get<CommerceTypes.Listings>(`/v2/commerce/prices?ids=${ ids.join(',') }`)).data
    }

    public async getPriceById(id: number): Promise<CommerceTypes.Price> {
        return (await this.api.get<CommerceTypes.Price>(`/v2/commerce/prices/${ id }`)).data
    }

    public async getTransactionsCurrent(type: 'buys' | 'sells'): Promise<CommerceTypes.TransactionsCurrent> {
        return (await this.api.get<CommerceTypes.TransactionsCurrent>(`/v2/commerce/transactions/current/${ type }`)).data
    }

    public async getTransactionsHistory(type: 'buys' | 'sells'): Promise<CommerceTypes.TransactionsHistory> {
        return (await this.api.get<CommerceTypes.TransactionsHistory>(`/v2/commerce/transactions/history/${ type }`)).data
    }

}