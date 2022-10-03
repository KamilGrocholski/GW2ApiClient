import { BaseApi, ClientOptions } from "../baseAPI";
import { WorldId } from "../worlds/types";
import { WvWAbility, WvWAbilityId, WvWColor, WvWMatch, WvWMatchId, WvWMatchOverview, WvWMatchScores, WvWMatchStats, WvWMatchStatsByTeamColorTopKdr, WvWMatchStatsByTeamColorTopKills, WvWObjective, WvWObjectiveId, WvWRank, WvWRankId, WvWUpgrade, WvWUpgradeId } from "./types";

export class WvWClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getAbilitiesAllIds() {
        return this.get<WvWAbilityId[]>('/v2/wvw/abilities')
    }

    getAbilityById(id: WvWAbilityId) {
        return this.get<WvWAbility>(`/v2/wvw/abilities/${ id }`)
    }

    getAbilitiesByIds(ids: WvWAbilityId[]) {
        return this.get<WvWAbility[]>(`/v2/wvw/abilities?ids=${ ids.join(',') }`)
    }

    getMatchesAllIds() {
        return this.get<WvWMatchId[]>('/v2/wvw/matches')
    }

    getMatchById(id: WvWMatchId) {
        return this.get<WvWMatch>(`/v2/wvw/matches/${ id }`)
    }

    getMatchesByIds(ids: WvWMatchId[]) {
        return this.get<WvWMatch[]>(`/v2/wvw/matches?ids=${ ids.join(',') }`)
    }

    getMatchOvierview(worldId: WorldId) {
        return this.get<WvWMatchOverview>(`/v2/wvw/matches/overview?world=${ worldId }`)
    }

    getMatchScores(worldId: WorldId) {
        return this.get<WvWMatchScores>(`/v2/wvw/matches/scores?world=${ worldId }`)
    }

    getMatchStats(worldId: WorldId) {
        return this.get<WvWMatchStats>(`/v2/wvw/matches/stats?world=${ worldId }`)
    }

    //TODO zawsze zwraca [] -- wina gw2
    // getMatchStatsByTeamColor({
    //     matchId,
    //     color,
    //     top
    // }: {
    //     matchId: WvWMatchId
    //     color: WvWColor
    //     top: 'kdr' | 'kills'
    // }) {
    //     if (top === 'kills') {
    //         return this.get<WvWMatchStatsByTeamColorTopKills>(`/v2/wvw/matches/stats/${ matchId }/teams/${ color }/top/${ top }`)
    //     }
    //     if (top === 'kdr') {
    //         return this.get<WvWMatchStatsByTeamColorTopKdr>(`/v2/wvw/matches/stats/${ matchId }/teams/${ color }/top/${ top }`)
    //     }
    // }

    getObjectivesAllIds() {
        return this.get<WvWObjectiveId[]>('/v2/wvw/objectives')
    }

    getObjectiveById(id: WvWObjectiveId) {
        return this.get<WvWObjective>(`/v2/wvw/objectives/${ id }`)
    }

    getObjectivesByIds(ids: WvWObjectiveId[]) {
        return this.get<WvWObjective[]>(`/v2/wvw/objectives?ids=${ ids.join(',') }`)
    }

    getRanksAllIds() {
        return this.get<WvWRankId[]>('/v2/wvw/ranks')
    }

    getRankById(id: WvWRankId) {
        return this.get<WvWRank>(`/v2/wvw/ranks/${ id }`)
    }

    getRanksByIds(ids: WvWRankId[]) {
        return this.get<WvWRank[]>(`/v2/wvw/ranks?ids=${ ids.join(',') }`)
    }

    getUpgradesAllIds() {
        return this.get<WvWUpgradeId[]>('/v2/wvw/upgrades')
    }

    getUpgradeById(id: WvWUpgradeId) {
        return this.get<WvWUpgrade>(`/v2/wvw/upgrades/${ id }`)
    }

    getUpgradesByIds(ids: WvWUpgradeId[]) {
        return this.get<WvWUpgrade[]>(`/v2/wvw/upgrades?ids=${ ids.join(',') }`)
    }
}