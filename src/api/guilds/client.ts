import { BaseApi, ClientOptions } from "../baseAPI";
import { GuildId, Guild, Log, Stash, Treasury, GuildUpgradesInformations, UpgradesListId, Upgrade, LogId, Members, Ranks, Teams } from "./types";

export class GuildsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getGuildIdsByName(name: string) {
        return this.get<GuildId[]>(`/v2/guild/search?name=${ name }`)
    }

    getGuildById(id: GuildId) {
        return this.get<Guild>(`/v2/guild/${ id }`)
    }

    getGuildLog(id: LogId, since?: number) {
        return this.get<Log>(`/v2/guild/${ id }/log?since=${ since }`)
    }

    // getGuildsByIds(ids: number[]): Promise<Guilds> {
    //     return this.get<Guilds>(`/v2/guilds?ids=${ ids.join(',') }`)
    // }

    getGuildMembers(guildId: GuildId) {
        return this.get<Members>(`/v2/guild/${ guildId }/members`)
    }

    getGuildRanks(guildId: GuildId) {
        return this.get<Ranks>(`/v2/guild/${ guildId }/ranks`)
    }

    getGuildStash(guildId: GuildId) {
        return this.get<Stash>(`/v2/guild/${ guildId }/stash`)
    }

    getGuildStorage(guildId: GuildId) {
        return this.get<Storage>(`/v2/guild/${ guildId }/storage`)
    }

    getGuildTeams(guildId: GuildId) {
        return this.get<Teams>(`/v2/guild/${ guildId }/teams`)
    }

    getGuildTreasury(guildId: GuildId) {
        return this.get<Treasury>(`/v2/guild/${ guildId }/treasury`)
    }

    getGuildUpgrades(guildId: GuildId) {
        return this.get<GuildUpgradesInformations>(`/v2/guild/${ guildId }/upgrades`)
    }

    getPermissions() {
        return this.get<Permissions>(`/v2/guild/permissions`)
    }

    getUpgradesAllIds() {
        return this.get<UpgradesListId>(`/v2/guild/upgrades`)
    }

    getUpgradeById(id: number) {
        return this.get<Upgrade>(`/v2/guild/upgrades/${ id }`)
    }

    getUpgradesByIds(ids: number[]) {
        return this.get<Upgrade>(`/v2/guild/upgrades?ids=${ ids.join(',') }`)
    }
}