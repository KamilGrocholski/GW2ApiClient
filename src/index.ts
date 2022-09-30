import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import GW2Types, { Finishers } from "./interfaces"
import dotenv from 'dotenv'
dotenv.config()

const baseURL = 'https://api.guildwars2.com'
const token = process.env.GW2_TOKEN as string


export interface ApiOptions {
    token?: string,
    baseURL: string
}

export class BaseApi {
    public api: AxiosInstance

    constructor(ApiOptions?: ApiOptions) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ ApiOptions?.token }`
            }
        })

        //TODO dodać obsługę interceptorów
        this.api.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                return config
            },
            (error: AxiosError) => {
                console.log(error)
                return Promise.reject(error)
            }
        )

        this.api.interceptors.response.use(
            (response: AxiosResponse) => {
                return Promise.resolve(response)
            },
            (error: AxiosError) => {
                console.log(error)
                return Promise.reject(error)
            }
        )
    }
}

export class V2 extends BaseApi {
    public account: Account

    constructor(ApiOptions?: ApiOptions) {
        super(ApiOptions)

        this.account = new Account(ApiOptions)
    }
}

export class Account extends BaseApi {
    constructor(ApiOptions?: ApiOptions) {
        super(ApiOptions)
    }

    public async Account(): Promise<GW2Types.Account> {
        return (await this.api.get<GW2Types.Account>('/v2/account')).data
    }
    public async Achievements(): Promise<GW2Types.Achievements> {
        return (await this.api.get<GW2Types.Achievements>('/v2/account/achievements')).data
    }
    public async Bank(): Promise<GW2Types.Bank> {
        return (await this.api.get<GW2Types.Bank>('/v2/account/bank')).data
    }
    public async BuildStorage(): Promise<GW2Types.BuildStorage> { //TODO interface
        return (await this.api.get<GW2Types.BuildStorage>('/v2/account/buildstorage')).data 
    }
    public async DailyCrafting(): Promise<GW2Types.DailyCrafting> {
        return (await this.api.get<GW2Types.DailyCrafting>('/v2/account/dailycrafting')).data
    }
    public async Dyes(): Promise<GW2Types.Dyes> {
        return (await this.api.get<GW2Types.Dyes>('/v2/account/dyes')).data
    }
    public async Dungeons(): Promise<GW2Types.Dungeons> {
        return (await this.api.get<GW2Types.Dungeons>('/v2/account/dungeons')).data
    }
    public async Emotes(): Promise<GW2Types.Emotes> {
        return (await this.api.get<GW2Types.Emotes>('/v2/account/emotes')).data
    }
    public async Finishers(): Promise<GW2Types.Finishers> {
        return (await this.api.get<GW2Types.Finishers>('/v2/account/finishers')).data
    }
    public async Gliders(): Promise<GW2Types.Gliders> {
        return (await this.api.get<GW2Types.Gliders>('/v2/account/gliders')).data
    }
    public async Home(): Promise<GW2Types.Home> {
        return (await this.api.get<GW2Types.Home>('/v2/account/home')).data
    }
    public async Home_Cats(): Promise<GW2Types.Home_Cats> {
        return (await this.api.get<GW2Types.Home_Cats>('/v2/account/home/cats')).data
    }
    public async Home_Nodes(): Promise<GW2Types.Home_Nodes> {
        return (await this.api.get<GW2Types.Home_Nodes>('/v2/account/home/nodes')).data
    }
    public async Inventory(): Promise<GW2Types.Inventory> {
        return (await this.api.get<GW2Types.Inventory>('/v2/account/inventory')).data
    }
    public async LegendaryArmory(): Promise<GW2Types.LegendaryArmory> {
        return (await this.api.get<GW2Types.LegendaryArmory>('/v2/account/legendaryarmory')).data
    }
    public async Luck(): Promise<GW2Types.Luck> {
        return (await this.api.get<GW2Types.Luck>('/v2/account/luck')).data
    }
    public async MailCarriers(): Promise<GW2Types.MailCarriers> {
        return (await this.api.get<GW2Types.MailCarriers>('/v2/account/mailcarriers')).data
    }
    public async MapChests(): Promise<GW2Types.MapChests> {
        return (await this.api.get<GW2Types.MapChests>('/v2/account/mapchests')).data
    }
    public async Masteries(): Promise<GW2Types.Masteries> {
        return (await this.api.get<GW2Types.Masteries>('/v2/account/masteries')).data
    }
    public async MasteryPoints(): Promise<GW2Types.MasteryPoints> {
        return (await this.api.get<GW2Types.MasteryPoints>('/v2/account/mastery/points')).data
    }
    public async Materials(): Promise<GW2Types.Materials> {
        return (await this.api.get<GW2Types.Materials>('/v2/account/materials')).data
    }
    public async Minis(): Promise<GW2Types.Minis> {
        return (await this.api.get<GW2Types.Minis>('/v2/account/minis')).data
    }
    public async Mounts(): Promise<GW2Types.Mounts> {
        return (await this.api.get<GW2Types.Mounts>('/v2/account/mounts')).data
    }
    public async Mounts_Skins(): Promise<GW2Types.Mounts_Skins> {
        return (await this.api.get<GW2Types.Mounts_Skins>('/v2/account/mounts/skins')).data
    }
    public async Mounts_Types(): Promise<GW2Types.Mounts_Types> {
        return (await this.api.get<GW2Types.Mounts_Types>('/v2/account/mounts/types')).data
    }
    public async Novelties(): Promise<GW2Types.Novelties> {
        return (await this.api.get<GW2Types.Novelties>('/v2/account/novelties')).data
    }
    public async Outfits(): Promise<GW2Types.Outfits> {
        return (await this.api.get<GW2Types.Outfits>('/v2/account/outfits')).data
    }
    public async Progression(): Promise<GW2Types.Progression> {
        return (await this.api.get<GW2Types.Progression>('/v2/account/progression')).data
    }
    public async PvPHeroes(): Promise<GW2Types.PvPHeroes> {
        return (await this.api.get<GW2Types.PvPHeroes>('/v2/account/pvp/heroes')).data
    }
    public async Raids(): Promise<GW2Types.Raids> {
        return (await this.api.get<GW2Types.Raids>('/v2/account/raids')).data
    }
    public async Recipes(): Promise<GW2Types.Recipes> {
        return (await this.api.get<GW2Types.Recipes>('/v2/account/recipes')).data
    }
    public async Skins(): Promise<GW2Types.Skins> {
        return (await this.api.get<GW2Types.Skins>('/v2/account/skins')).data
    }
    public async Titles(): Promise<GW2Types.Titles> {
        return (await this.api.get<GW2Types.Titles>('/v2/account/titles')).data
    }
    public async Wallet(): Promise<GW2Types.Wallet> {
        return (await this.api.get<GW2Types.Wallet>('/v2/account/wallet')).data
    }
    public async WorldBosses(): Promise<GW2Types.WorldBosses> {
        return (await this.api.get<GW2Types.WorldBosses>('/v2/account/worldbosses')).data
    }
}

(async () => {
    
    const GW2Client = new V2({
        baseURL,
        token: process.env.GW2_TOKEN as string
    })
    const res = await GW2Client.account.Achievements()
    console.log(res)
})()
