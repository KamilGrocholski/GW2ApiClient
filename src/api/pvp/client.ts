import { BaseApi, ClientOptions } from "../baseAPI";
import { Server } from "../common/types";
import { AmuletId, Amulet, GameId, Game, HeroId, Hero, RankId, Rank, SeasonId, Season, Leaderboard, Standings, Stats } from "./types";

export class PvPClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getAmuletsAllIds() {
        return this.get<AmuletId[]>('/v2/pvp/amulets')
    }

    getAmuletById(id: AmuletId) {
        return this.get<Amulet>(`/v2/pvp/amulets/${ id }`)
    }

    getAmuletsByIds(ids: AmuletId[]) {
        return this.get<Amulet[]>(`/v2/pvp/amulets?ids=${ ids.join(',') }`)
    }

    getGamesAllIds() {
        return this.get<GameId[]>('/v2/pvp/games')
    }

    getGameById(id: GameId) {
        return this.get<Game>(`/v2/pvp/games/${ id }`)
    }

    getGamesByIds(ids: GameId[]) {
        return this.get<Game[]>(`/v2/pvp/games?ids=${ ids.join(',') }`)
    }

    getHeroesAllIds() {
        return this.get<HeroId[]>('/v2/pvp/heroes')
    }

    getHeroById(id: HeroId) {
        return this.get<Hero>(`/v2/pvp/heroes/${ id }`)
    }

    getHeroesByIds(ids: HeroId[]) {
        return this.get<Hero[]>(`/v2/pvp/heroes?ids=${ ids.join(',') }`)
    }

    getRanksAllIds() {
        return this.get<RankId[]>('/v2/pvp/ranks')
    }

    getRankById(id: RankId) {
        return this.get<Rank>(`/v2/pvp/ranks/${ id }`)
    }

    getRanksByIds(ids: RankId[]) {
        return this.get<Rank[]>(`/v2/pvp/ranks?ids=${ ids.join(',') }`)
    }

    getSeasonsAllIds() {
        return this.get<SeasonId[]>('/v2/pvp/seasons')
    }

    getSeasonsByIds(ids: SeasonId[]) {
        return this.get<Season[]>(`/v2/pvp/seasons?ids=${ ids.join(',') }`)
    }

    getLeaderboardsBySeasonId(seasonId: SeasonId, type: 'legendary' | 'guild' | 'ladder', server: Server) {
        return this.get<Leaderboard[]>(`/v2/pvp/seasons/${ seasonId }/leaderboards/${ type }/${ server }`)
    }

    getStandings() {
        return this.get<Standings>('/v2/pvp/standings')
    }

    getStats() {
        return this.get<Stats>('/v2/pvp/stats')
    }
}