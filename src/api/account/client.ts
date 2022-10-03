import { BaseApi, ClientOptions } from '../baseAPI'
import { Account, Achievements, Bank, BuildStorage, DailyCrafting, Dungeons, Dyes, Emotes, Finishers, Gliders, Home, Home_Cats, Home_Nodes, Inventory, LegendaryArmory, Luck, MailCarriers, MapChests, Masteries, MasteryPoints, Materials, Minis, Mounts, Mounts_Skins, Mounts_Types, Novelties, Outfits, Progression, PvPHeroes, Raids, Recipes, Skins, Titles, Wallet, WorldBosses } from './types'

export class AccountClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getaccount() {
        return this.get<Account>('/v2/account')
    }
    getachievements() {
        return this.get<Achievements>('/v2/account/achievements')
    }
    getbank() {
        return this.get<Bank>('/v2/account/bank')
    }
    getbuildStorage() { //TODO interface
        return this.get<BuildStorage>('/v2/account/buildstorage')
    }
    getdailyCrafting() {
        return this.get<DailyCrafting>('/v2/account/dailycrafting')
    }
    getdyes() {
        return this.get<Dyes>('/v2/account/dyes')
    }
    getdungeons() {
        return this.get<Dungeons>('/v2/account/dungeons')
    }
    getemotes() {
        return this.get<Emotes>('/v2/account/emotes')
    }
    getfinishers() {
        return this.get<Finishers>('/v2/account/finishers')
    }
    getgliders() {
        return this.get<Gliders>('/v2/account/gliders')
    }
    gethome() {
        return this.get<Home>('/v2/account/home')
    }
    gethome_cats() {
        return this.get<Home_Cats>('/v2/account/home/cats')
    }
    gethome_nodes() {
        return this.get<Home_Nodes>('/v2/account/home/nodes')
    }
    getinventory() {
        return this.get<Inventory>('/v2/account/inventory')
    }
    getlegendaryArmory() {
        return this.get<LegendaryArmory>('/v2/account/legendaryarmory')
    }
    getluck() {
        return this.get<Luck>('/v2/account/luck')
    }
    getmailCarriers() {
        return this.get<MailCarriers>('/v2/account/mailcarriers')
    }
    getmapChests() {
        return this.get<MapChests>('/v2/account/mapchests')
    }
    getmasteries() {
        return this.get<Masteries>('/v2/account/masteries')
    }
    getmastery_points() {
        return this.get<MasteryPoints>('/v2/account/mastery/points')
    }
    getmaterials() {
        return this.get<Materials>('/v2/account/materials')
    }
    getminis() {
        return this.get<Minis>('/v2/account/minis')
    }
    getmounts() {
        return this.get<Mounts>('/v2/account/mounts')
    }
    getmounts_skins() {
        return this.get<Mounts_Skins>('/v2/account/mounts/skins')
    }
    getmounts_types() {
        return this.get<Mounts_Types>('/v2/account/mounts/types')
    }
    getnovelties() {
        return this.get<Novelties>('/v2/account/novelties')
    }
    getoutfits() {
        return this.get<Outfits>('/v2/account/outfits')
    }
    getprogression() {
        return this.get<Progression>('/v2/account/progression')
    }
    getpvp_heroes() {
        return this.get<PvPHeroes>('/v2/account/pvp/heroes')
    }
    getraids() {
        return this.get<Raids>('/v2/account/raids')
    }
    getrecipes() {
        return this.get<Recipes>('/v2/account/recipes')
    }
    getskins() {
        return this.get<Skins>('/v2/account/skins')
    }
    gettitles() {
        return this.get<Titles>('/v2/account/titles')
    }
    getwallet() {
        return this.get<Wallet>('/v2/account/wallet')
    }
    getworldBosses() {
        return this.get<WorldBosses>('/v2/account/worldbosses')
    }
}
