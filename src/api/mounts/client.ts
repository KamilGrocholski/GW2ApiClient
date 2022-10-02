import { MountsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class MountsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getTypesAllIds(): Promise<MountsTypes.MountTypesIds> {
        return (await this.api.get<MountsTypes.MountTypesIds>('/v2/mounts/types')).data
    }

    public async getTypesByIds(ids: string[]): Promise<MountsTypes.MountTypes> {
        return (await this.api.get<MountsTypes.MountTypes>(`/v2/mounts/types?ids=${ ids.join(',') }`)).data
    }

    public async getTypeById(id: string): Promise<MountsTypes.MountType> {
        return (await this.api.get<MountsTypes.MountType>(`/v2/mounts/types/${ id }`)).data
    }

    public async getSkinsAllIds(): Promise<MountsTypes.MountSkinsIds> {
        return (await this.api.get<MountsTypes.MountTypesIds>('/v2/mounts/skins')).data
    }

    public async getSkinsByIds(ids: number[]): Promise<MountsTypes.MountSkins> {
        return (await this.api.get<MountsTypes.MountSkins>(`/v2/mounts/skins?ids=${ ids.join(',') }`)).data
    }

    public async getSkinById(id: number): Promise<MountsTypes.MountSkin> {
        return (await this.api.get<MountsTypes.MountSkin>(`/v2/mounts/skins/${ id }`)).data
    }
}