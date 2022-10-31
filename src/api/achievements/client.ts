import { BaseApi, ClientOptions } from "../baseAPI"
import { Achievement, AchievementId, Category, CategoryId, Daily, Group, GroupId } from "./types"

export class AchievementsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    /**
     * This resource returns all achievements ids in the game.
     * https://wiki.guildwars2.com/wiki/API:2/achievements
     * @returns 
     */
    getAchievementsAllIds() {
        return this.get<AchievementId[]>('/v2/achievements')
    }

    /**
     * This resource returns all achievements in the game, including localized names and icons.
     * https://wiki.guildwars2.com/wiki/API:2/achievements
     * @param ids 
     * @returns 
     */
    getAchievementsByIds(ids: AchievementId[]) {
        return this.get<Achievement[]>(`/v2/achievements?ids=${ ids.join(',') }`)
    }

    /**
     * This resource returns list of all categories ids in the game.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/categories
     * @returns 
     */
    getCategoriesAllIds() {
        return this.get<CategoryId[]>('/v2/achievements/categories')
    }

    /**
     * This resource returns the categories for achievements.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/categories
     * @param ids 
     * @returns 
     */
    getCategoriesByIds(ids: CategoryId[]){
        return this.get<Category[]>(`/v2/achievements/categories?ids=${ ids.join(',') }`)
    }

    /**
     * This resource returns the current set of daily achievements.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/daily
     * @returns 
     */
    getDaily() {
        return this.get<Daily>('/v2/achievements/daily')
    }

    /**
     * This resource returns the next set of daily achievements.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/daily/tomorrow
     * @returns 
     */
    getDailyTomorrow() {
        return this.get<Daily>('/v2/achievements/daily/tomorrow')
    }

    /**
     * This resource returns all ids for the top-level groups for achievements.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/groups
     * @returns 
     */
    getGroupsAllIds() {
        return this.get<GroupId[]>('/v2/achievements/groups')
    }

    /**
     * This resource returns the top-level groups for achievements.
     * https://wiki.guildwars2.com/wiki/API:2/achievements/groups
     * @param ids 
     * @returns 
     */
    getGroupsByIds(ids: GroupId[]) {
        return this.get<Group[]>(`/v2/achievements/groups?ids=${ ids.join(',') }`)
    }
}