import { BaseApi, ClientOptions } from "../baseAPI"
import * as AchievementsTypes from './types'

export class AchievementsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getAllIds(): Promise<AchievementsTypes.AchievementsIds> {
        return (await this.api.get<AchievementsTypes.AchievementsIds>('/v2/achievements')).data
    }
    public async getByIds(ids: number[]): Promise<AchievementsTypes.Achievements> {
        return (await this.api.get<AchievementsTypes.Achievements>(`/v2/achievements?ids=${ ids.join(',') }`)).data
    }
    public async getCategoriesAllIds(): Promise<AchievementsTypes.Achievements> {
        return (await this.api.get<AchievementsTypes.Achievements>('/v2/achievements/categories')).data
    }
    public async getCategoriesByIds(ids: number[]): Promise<AchievementsTypes.CategoriesIds> {
        return (await this.api.get<AchievementsTypes.CategoriesIds>(`/v2/achievements/categories?ids=${ ids.join(',') }`)).data
    }
    public async getDaily(): Promise<AchievementsTypes.Daily> {
        return (await this.api.get<AchievementsTypes.Daily>('/v2/achievements/daily')).data
    }
    public async getDailyTomorrow(): Promise<AchievementsTypes.Daily> {
        return (await this.api.get<AchievementsTypes.Daily>('/v2/achievements/daily/tomorrow')).data
    }
    public async getGroupsAllIds(): Promise<AchievementsTypes.GroupsIds> {
        return (await this.api.get<AchievementsTypes.GroupsIds>('/v2/achievements/groups')).data
    }
    public async getGroupsByIds(ids: string[]): Promise<AchievementsTypes.Groups> {
        return (await this.api.get<AchievementsTypes.Groups>(`/v2/achievements/groups?ids=${ ids.join(',') }`)).data
    }
}