import { BaseApi, ClientOptions } from "../baseAPI";
import { Delivery, ExchangeRate, ListingId, Listing, PriceId, Price, TransactionsCurrent, TransactionsHistory } from "./types";

export class CommerceClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getDelivery() {
        return this.get<Delivery>('/v2/commerce/delivery')
    }

    getExchangeCoinsRate(quantity: number) {
        return this.get<ExchangeRate>(`/v2/commerce/exchange/coins?quantity=${ quantity }`)
    }

    getExchangeGemsRate(quantity: number) {
        return this.get<ExchangeRate>(`/v2/commerce/exchange/gems?quantity=${ quantity }`)
    }

    getListingsAllIds() {
        return this.get<ListingId[]>('/v2/commerce/listings')
    }

    getListingsByIds(ids: ListingId[]) {
        return this.get<Listing[]>(`/v2/commerce/listings?ids=${ ids.join(',') }`)
    }

    getListingById(id: number) {
        return this.get<Listing>(`/v2/commerce/listings/${ id }`)
    }

    getPricesAllIds() {
        return this.get<PriceId[]>('/v2/commerce/prices')
    }

    getPricesByIds(ids: PriceId[]) {
        return this.get<Price[]>(`/v2/commerce/prices?ids=${ ids.join(',') }`)
    }

    getPriceById(id: PriceId) {
        return this.get<Price>(`/v2/commerce/prices/${ id }`)
    }

    getTransactionsCurrent(type: 'buys' | 'sells') {
        return this.get<TransactionsCurrent>(`/v2/commerce/transactions/current/${ type }`)
    }

    getTransactionsHistory(type: 'buys' | 'sells') {
        return this.get<TransactionsHistory>(`/v2/commerce/transactions/history/${ type }`)
    }

}