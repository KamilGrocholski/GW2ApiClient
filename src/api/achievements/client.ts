import { BaseApi, ClientOptions } from "../baseAPI"
import * as AchievementsTypes from './types'

export class AchievementsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getAllIds(): Promise<AchievementsTypes.getAllIds> {
        return (await this.api.get<AchievementsTypes.getAllIds>('/v2/achievements')).data
    }
    public async getByIds(ids: number[]): Promise<AchievementsTypes.getByIds> {
        return (await this.api.get<AchievementsTypes.getByIds>(`/v2/achievements?ids=${ ids.join(',') }`)).data
    }
    public async categories() {
        return (await this.api.get('/v2/achievements/categories')).data
    }
}