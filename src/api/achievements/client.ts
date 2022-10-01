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
    public async getCategoriesAllIds(): Promise<AchievementsTypes.getCategoriesAllIds> {
        return (await this.api.get<AchievementsTypes.getCategoriesAllIds>('/v2/achievements/categories')).data
    }
    public async getCategoriesByIds(ids: number[]): Promise<AchievementsTypes.getCategoriesByIds> {
        return (await this.api.get<AchievementsTypes.getCategoriesByIds>(`/v2/achievements/categories?ids=${ ids.join(',') }`)).data
    }
    public async getDaily(): Promise<AchievementsTypes.getDaily> {
        return (await this.api.get<AchievementsTypes.getDaily>('/v2/achievements/daily')).data
    }
    public async getDailyTomorrow(): Promise<AchievementsTypes.getDailyTomorrow> {
        return (await this.api.get<AchievementsTypes.getDailyTomorrow>('/v2/achievements/daily/tomorrow')).data
    }
    public async getGroupsAllIds(): Promise<AchievementsTypes.getGroupsAllIds> {
        return (await this.api.get<AchievementsTypes.getGroupsAllIds>('/v2/achievements/groups')).data
    }
    public async getGroupsByIds(ids: string[]): Promise<AchievementsTypes.getGroupsAllIds> {
        return (await this.api.get<AchievementsTypes.getGroupsAllIds>(`/v2/achievements/groups?ids=${ ids.join(',') }`)).data
    }
}