import { BaseApi, ClientOptions } from '../baseAPI'
import * as AccountTypes from './types'

export class AccountClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async account(): Promise<AccountTypes.Account> {
        return (await this.api.get<AccountTypes.Account>('/v2/account')).data
    }
    public async achievements(): Promise<AccountTypes.Achievements> {
        return (await this.api.get<AccountTypes.Achievements>('/v2/account/achievements')).data
    }
    public async bank(): Promise<AccountTypes.Bank> {
        return (await this.api.get<AccountTypes.Bank>('/v2/account/bank')).data
    }
    public async buildStorage(): Promise<AccountTypes.BuildStorage> { //TODO interface
        return (await this.api.get<AccountTypes.BuildStorage>('/v2/account/buildstorage')).data
    }
    public async dailyCrafting(): Promise<AccountTypes.DailyCrafting> {
        return (await this.api.get<AccountTypes.DailyCrafting>('/v2/account/dailycrafting')).data
    }
    public async dyes(): Promise<AccountTypes.Dyes> {
        return (await this.api.get<AccountTypes.Dyes>('/v2/account/dyes')).data
    }
    public async dungeons(): Promise<AccountTypes.Dungeons> {
        return (await this.api.get<AccountTypes.Dungeons>('/v2/account/dungeons')).data
    }
    public async emotes(): Promise<AccountTypes.Emotes> {
        return (await this.api.get<AccountTypes.Emotes>('/v2/account/emotes')).data
    }
    public async finishers(): Promise<AccountTypes.Finishers> {
        return (await this.api.get<AccountTypes.Finishers>('/v2/account/finishers')).data
    }
    public async gliders(): Promise<AccountTypes.Gliders> {
        return (await this.api.get<AccountTypes.Gliders>('/v2/account/gliders')).data
    }
    public async home(): Promise<AccountTypes.Home> {
        return (await this.api.get<AccountTypes.Home>('/v2/account/home')).data
    }
    public async home_cats(): Promise<AccountTypes.Home_Cats> {
        return (await this.api.get<AccountTypes.Home_Cats>('/v2/account/home/cats')).data
    }
    public async home_nodes(): Promise<AccountTypes.Home_Nodes> {
        return (await this.api.get<AccountTypes.Home_Nodes>('/v2/account/home/nodes')).data
    }
    public async inventory(): Promise<AccountTypes.Inventory> {
        return (await this.api.get<AccountTypes.Inventory>('/v2/account/inventory')).data
    }
    public async legendaryArmory(): Promise<AccountTypes.LegendaryArmory> {
        return (await this.api.get<AccountTypes.LegendaryArmory>('/v2/account/legendaryarmory')).data
    }
    public async luck(): Promise<AccountTypes.Luck> {
        return (await this.api.get<AccountTypes.Luck>('/v2/account/luck')).data
    }
    public async mailCarriers(): Promise<AccountTypes.MailCarriers> {
        return (await this.api.get<AccountTypes.MailCarriers>('/v2/account/mailcarriers')).data
    }
    public async mapChests(): Promise<AccountTypes.MapChests> {
        return (await this.api.get<AccountTypes.MapChests>('/v2/account/mapchests')).data
    }
    public async masteries(): Promise<AccountTypes.Masteries> {
        return (await this.api.get<AccountTypes.Masteries>('/v2/account/masteries')).data
    }
    public async mastery_points(): Promise<AccountTypes.MasteryPoints> {
        return (await this.api.get<AccountTypes.MasteryPoints>('/v2/account/mastery/points')).data
    }
    public async materials(): Promise<AccountTypes.Materials> {
        return (await this.api.get<AccountTypes.Materials>('/v2/account/materials')).data
    }
    public async minis(): Promise<AccountTypes.Minis> {
        return (await this.api.get<AccountTypes.Minis>('/v2/account/minis')).data
    }
    public async mounts(): Promise<AccountTypes.Mounts> {
        return (await this.api.get<AccountTypes.Mounts>('/v2/account/mounts')).data
    }
    public async mounts_skins(): Promise<AccountTypes.Mounts_Skins> {
        return (await this.api.get<AccountTypes.Mounts_Skins>('/v2/account/mounts/skins')).data
    }
    public async mounts_types(): Promise<AccountTypes.Mounts_Types> {
        return (await this.api.get<AccountTypes.Mounts_Types>('/v2/account/mounts/types')).data
    }
    public async novelties(): Promise<AccountTypes.Novelties> {
        return (await this.api.get<AccountTypes.Novelties>('/v2/account/novelties')).data
    }
    public async outfits(): Promise<AccountTypes.Outfits> {
        return (await this.api.get<AccountTypes.Outfits>('/v2/account/outfits')).data
    }
    public async progression(): Promise<AccountTypes.Progression> {
        return (await this.api.get<AccountTypes.Progression>('/v2/account/progression')).data
    }
    public async pvp_heroes(): Promise<AccountTypes.PvPHeroes> {
        return (await this.api.get<AccountTypes.PvPHeroes>('/v2/account/pvp/heroes')).data
    }
    public async raids(): Promise<AccountTypes.Raids> {
        return (await this.api.get<AccountTypes.Raids>('/v2/account/raids')).data
    }
    public async recipes(): Promise<AccountTypes.Recipes> {
        return (await this.api.get<AccountTypes.Recipes>('/v2/account/recipes')).data
    }
    public async skins(): Promise<AccountTypes.Skins> {
        return (await this.api.get<AccountTypes.Skins>('/v2/account/skins')).data
    }
    public async titles(): Promise<AccountTypes.Titles> {
        return (await this.api.get<AccountTypes.Titles>('/v2/account/titles')).data
    }
    public async wallet(): Promise<AccountTypes.Wallet> {
        return (await this.api.get<AccountTypes.Wallet>('/v2/account/wallet')).data
    }
    public async worldBosses(): Promise<AccountTypes.WorldBosses> {
        return (await this.api.get<AccountTypes.WorldBosses>('/v2/account/worldbosses')).data
    }
}
