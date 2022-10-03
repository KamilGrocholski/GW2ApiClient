import { BaseApi, ClientOptions } from '../baseAPI'
import { Account, Achievements, Bank, BuildStorage, DailyCrafting, Dungeons, Dyes, Emotes, Finishers, Gliders, Home, Home_Cats, Home_Nodes, Inventory, LegendaryArmory, Luck, MailCarriers, MapChests, Masteries, MasteryPoints, Materials, Minis, Mounts, Mounts_Skins, Mounts_Types, Novelties, Outfits, Progression, PvPHeroes, Raids, Recipes, Skins, Titles, Wallet, WorldBosses } from './types'

export class AccountClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getAccount() {
        return this.get<Account>('/v2/account')
    }
    getAchievements() {
        return this.get<Achievements>('/v2/account/achievements')
    }
    getBank() {
        return this.get<Bank>('/v2/account/bank')
    }
    getBuildStorage() { //TODO interface
        return this.get<BuildStorage>('/v2/account/buildstorage')
    }
    getDailyCrafting() {
        return this.get<DailyCrafting>('/v2/account/dailycrafting')
    }
    getDyes() {
        return this.get<Dyes>('/v2/account/dyes')
    }
    getDungeons() {
        return this.get<Dungeons>('/v2/account/dungeons')
    }
    getEmotes() {
        return this.get<Emotes>('/v2/account/emotes')
    }
    getFinishers() {
        return this.get<Finishers>('/v2/account/finishers')
    }
    getGliders() {
        return this.get<Gliders>('/v2/account/gliders')
    }
    getHome() {
        return this.get<Home>('/v2/account/home')
    }
    getHomeCats() {
        return this.get<Home_Cats>('/v2/account/home/cats')
    }
    getHomeNodes() {
        return this.get<Home_Nodes>('/v2/account/home/nodes')
    }
    getInventory() {
        return this.get<Inventory>('/v2/account/inventory')
    }
    getLegendaryArmory() {
        return this.get<LegendaryArmory>('/v2/account/legendaryarmory')
    }
    getLuck() {
        return this.get<Luck>('/v2/account/luck')
    }
    getMailCarriers() {
        return this.get<MailCarriers>('/v2/account/mailcarriers')
    }
    getMapChests() {
        return this.get<MapChests>('/v2/account/mapchests')
    }
    getMasteries() {
        return this.get<Masteries>('/v2/account/masteries')
    }
    getMasteryPoints() {
        return this.get<MasteryPoints>('/v2/account/mastery/points')
    }
    getMaterials() {
        return this.get<Materials>('/v2/account/materials')
    }
    getMinis() {
        return this.get<Minis>('/v2/account/minis')
    }
    getMounts() {
        return this.get<Mounts>('/v2/account/mounts')
    }
    getMountsSkins() {
        return this.get<Mounts_Skins>('/v2/account/mounts/skins')
    }
    getMountsTypes() {
        return this.get<Mounts_Types>('/v2/account/mounts/types')
    }
    getNovelties() {
        return this.get<Novelties>('/v2/account/novelties')
    }
    getOutfits() {
        return this.get<Outfits>('/v2/account/outfits')
    }
    getProgression() {
        return this.get<Progression>('/v2/account/progression')
    }
    getPvPHeroes() {
        return this.get<PvPHeroes>('/v2/account/pvp/heroes')
    }
    getRaids() {
        return this.get<Raids>('/v2/account/raids')
    }
    getRecipes() {
        return this.get<Recipes>('/v2/account/recipes')
    }
    getSkins() {
        return this.get<Skins>('/v2/account/skins')
    }
    getTitles() {
        return this.get<Titles>('/v2/account/titles')
    }
    getWallet() {
        return this.get<Wallet>('/v2/account/wallet')
    }
    getWorldBosses() {
        return this.get<WorldBosses>('/v2/account/worldbosses')
    }
}
