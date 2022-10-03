import { BaseApi, ClientOptions } from "../baseAPI"
import { Achievement, AchievementId, Category, CategoryId, Daily, Group, GroupId } from "./types"

export class AchievementsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getAchievementsAllIds() {
        return this.get<AchievementId[]>('/v2/achievements')
    }
    getAchievementsByIds(ids: AchievementId[]) {
        return this.get<Achievement[]>(`/v2/achievements?ids=${ ids.join(',') }`)
    }
    getCategoriesAllIds() {
        return this.get<CategoryId[]>('/v2/achievements/categories')
    }
    getCategoriesByIds(ids: CategoryId[]){
        return this.get<Category[]>(`/v2/achievements/categories?ids=${ ids.join(',') }`)
    }
    getDaily() {
        return this.get<Daily>('/v2/achievements/daily')
    }
    getDailyTomorrow() {
        return this.get<Daily>('/v2/achievements/daily/tomorrow')
    }
    getGroupsAllIds() {
        return this.get<GroupId[]>('/v2/achievements/groups')
    }
    getGroupsByIds(ids: GroupId[]) {
        return this.get<Group[]>(`/v2/achievements/groups?ids=${ ids.join(',') }`)
    }
}