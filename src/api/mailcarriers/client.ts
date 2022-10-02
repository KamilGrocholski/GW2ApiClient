import { BaseApi, ClientOptions } from "../baseAPI";
import { MailCarriersTypes } from ".";

export class MailCarriersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getMailCarriersAllIds(): Promise<MailCarriersTypes.MailCarriersIds> {
        return (await this.api.get<MailCarriersTypes.MailCarriersIds>('/v2/MailCarriers')).data
    }

    public async getMailCarrierById(id: number): Promise<MailCarriersTypes.MailCarrier> {
        return (await this.api.get<MailCarriersTypes.MailCarrier>(`/v2/MailCarriers/${ id }`)).data
    }

    public async getMailCarriersByIds(ids: number[]): Promise<MailCarriersTypes.MailCarriers> {
        return (await this.api.get<MailCarriersTypes.MailCarriers>(`/v2/MailCarriers?ids=${ ids.join(',') }`)).data
    }
}