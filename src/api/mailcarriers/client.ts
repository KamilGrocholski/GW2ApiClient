import { BaseApi, ClientOptions } from "../baseAPI";
import { MailCarrier, MailCarrierId } from "./types";

export class MailCarriersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getMailCarriersAllIds() {
        return this.get<MailCarrierId[]>('/v2/MailCarriers')
    }

    getMailCarrierById(id: number) {
        return this.get<MailCarrier>(`/v2/MailCarriers/${ id }`)
    }

    getMailCarriersByIds(ids: MailCarrierId[]) {
        return this.get<MailCarrier[]>(`/v2/MailCarriers?ids=${ ids.join(',') }`)
    }
}