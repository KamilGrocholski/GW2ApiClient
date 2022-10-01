import { GuildsTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class GuildsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getGuildIdsByName(name: string): Promise<GuildsTypes.GuildIds> {
        return (await this.api.get<GuildsTypes.GuildIds>(`/v2/guild/search?name=${ name }`)).data
    }

    public async getGuildById(id: string): Promise<GuildsTypes.Guild> {
        return (await this.api.get<GuildsTypes.Guild>(`/v2/guild/${ id }`)).data
    }

    public async getGuildLog(id: string, since?: number): Promise<GuildsTypes.Log> {
        return (await this.api.get<GuildsTypes.Log>(`/v2/guild/${ id }/log?since=${ since }`)).data
    }

    // public async getGuildsByIds(ids: number[]): Promise<GuildsTypes.Guilds> {
    //     return (await this.api.get<GuildsTypes.Guilds>(`/v2/guilds?ids=${ ids.join(',') }`)).data
    // }

    public async getGuildMembers(guildId: string): Promise<GuildsTypes.Members> {
        return (await this.api.get<GuildsTypes.Members>(`/v2/guild/${ guildId }/members`)).data
    }

    public async getGuildRanks(guildId: string): Promise<GuildsTypes.Ranks> {
        return (await this.api.get<GuildsTypes.Ranks>(`/v2/guild/${ guildId }/ranks`)).data
    }

    public async getGuildStash(guildId: string): Promise<GuildsTypes.Stash> {
        return (await this.api.get<GuildsTypes.Stash>(`/v2/guild/${ guildId }/stash`)).data
    }

    public async getGuildStorage(guildId: string): Promise<GuildsTypes.Storage> {
        return (await this.api.get<GuildsTypes.Storage>(`/v2/guild/${ guildId }/storage`)).data
    }

    public async getGuildTeams(guildId: string): Promise<GuildsTypes.Teams> {
        return (await this.api.get<GuildsTypes.Teams>(`/v2/guild/${ guildId }/teams`)).data
    }

    public async getGuildTreasury(guildId: string): Promise<GuildsTypes.Treasury> {
        return (await this.api.get<GuildsTypes.Treasury>(`/v2/guild/${ guildId }/treasury`)).data
    }

    public async getGuildUpgrades(guildId: string): Promise<GuildsTypes.GuildUpgradesInformations> {
        return (await this.api.get<GuildsTypes.GuildUpgradesInformations>(`/v2/guild/${ guildId }/upgrades`)).data
    }

    public async getPermissions(): Promise<GuildsTypes.Permissions> {
        return (await this.api.get<GuildsTypes.Permissions>(`/v2/guild/permissions`)).data
    }

    public async getUpgradesAllIds(): Promise<GuildsTypes.UpgradesListId> {
        return (await this.api.get<GuildsTypes.UpgradesListId>(`/v2/guild/upgrades`)).data
    }

    public async getUpgradeById(id: number): Promise<GuildsTypes.Upgrades> {
        return (await this.api.get<GuildsTypes.Upgrades>(`/v2/guild/upgrades/${ id }`)).data
    }

    public async getUpgradesByIds(ids: number[]): Promise<GuildsTypes.Upgrade> {
        return (await this.api.get<GuildsTypes.Upgrade>(`/v2/guild/upgrades?ids=${ ids.join(',') }`)).data
    }
}