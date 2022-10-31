import { BaseApi, ClientOptions } from '../baseAPI'
import { Account, Achievements, Bank, BuildStorage, DailyCrafting, Dungeons, Dyes, Emotes, Finishers, Gliders, Home, Home_Cats, Home_Nodes, Inventory, LegendaryArmory, Luck, MailCarriers, MapChests, Masteries, MasteryPoints, Materials, Minis, Mounts, Mounts_Skins, Mounts_Types, Novelties, Outfits, Progression, PvPHeroes, Raids, Recipes, Skins, Titles, Wallet, WorldBosses } from './types'

export class AccountClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    /**
     * This resource returns information about player accounts. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account
     * @returns 
     */
    getAccount() {
        return this.get<Account>('/v2/account')
    }

    /**
     * This resource returns an account's progress towards all their achievements. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/achievements
     * @returns 
     */
    getAchievements() {
        return this.get<Achievements>('/v2/account/achievements')
    }

    /**
     * This resource returns the items stored in a player's vault (not including material storage). This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/bank
     * @returns 
     */
    getBank() {
        return this.get<Bank>('/v2/account/bank')
    }

    /**
     * This resource returns the templates stored in a player's build storage. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/buildstorage
     * @returns 
     */
    getBuildStorage() {
        return this.get<BuildStorage>('/v2/account/buildstorage')
    }

    /**
     * This resource returns information about time-gated recipes that have been crafted by the account since daily-reset. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/dailycrafting
     * @returns 
     */
    getDailyCrafting() {
        return this.get<DailyCrafting>('/v2/account/dailycrafting')
    }

    /**
     * This resource returns the dungeons completed since daily dungeon reset. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/dungeons
     * @returns 
     */
    getDyes() {
        return this.get<Dyes>('/v2/account/dyes')
    }

    /**
     * This resource returns the unlocked dyes of the account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/dyes
     * @returns 
     */
    getDungeons() {
        return this.get<Dungeons>('/v2/account/dungeons')
    }

    /**
     * This resource returns the player's unlocked emotes. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/emotes
     * @returns 
     */
    getEmotes() {
        return this.get<Emotes>('/v2/account/emotes')
    }

    /**
     * This resource returns information about finishers that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/finishers
     * @returns 
     */
    getFinishers() {
        return this.get<Finishers>('/v2/account/finishers')
    }

    /**
     * This resource returns information about gliders that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/gliders
     * @returns 
     */
    getGliders() {
        return this.get<Gliders>('/v2/account/gliders')
    }

    /**
     * This resource returns a list of available sub-endpoints. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/home
     * @returns 
     */
    getHome() {
        return this.get<Home>('/v2/account/home')
    }

    /**
     * This resource returns information about unlocked home instance cats. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/home/cats
     * @returns 
     */
    getHomeCats() {
        return this.get<Home_Cats>('/v2/account/home/cats')
    }

    /**
     * This resource returns information about unlocked home instance nodes. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/home/nodes
     * @returns 
     */
    getHomeNodes() {
        return this.get<Home_Nodes>('/v2/account/home/nodes')
    }

    /**
     * This resource returns the shared inventory slots in an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/inventory
     * @returns 
     */
    getInventory() {
        return this.get<Inventory>('/v2/account/inventory')
    }

    /**
     * This resource returns the total amount of luck consumed on an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/luck
     * @returns 
     */
    getLegendaryArmory() {
        return this.get<LegendaryArmory>('/v2/account/legendaryarmory')
    }

    /**
     * This resource returns the total amount of luck consumed on an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/luck
     * @returns 
     */
    getLuck() {
        return this.get<Luck>('/v2/account/luck')
    }

    /**
     * This resource returns information about mail carriers that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/mailcarriers
     * @returns 
     */
    getMailCarriers() {
        return this.get<MailCarriers>('/v2/account/mailcarriers')
    }

    /**
     * This resource returns information about Hero's Choice Chests acquired by the account since daily-reset. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/mapchests
     * @returns 
     */
    getMapChests() {
        return this.get<MapChests>('/v2/account/mapchests')
    }

    /**
     * This resource returns information about masteries that are unlocked for an account. A tallied up total of the account's mastery points can be found at /v2/account/mastery/points. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/masteries
     * @returns 
     */
    getMasteries() {
        return this.get<Masteries>('/v2/account/masteries')
    }

    /**
     * This resource returns information about the total amount of mastery points that are unlocked for an account. A detailed mastery track completion break down is available at /v2/account/masteries. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/mastery/points
     * @returns 
     */
    getMasteryPoints() {
        return this.get<MasteryPoints>('/v2/account/mastery/points')
    }
    
    /**
     * This resource returns the materials stored in a player's vault. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/materials
     * @returns 
     */
    getMaterials() {
        return this.get<Materials>('/v2/account/materials')
    }

    /**
     * This resource returns the unlocked miniatures of the account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/minis
     * @returns 
     */
    getMinis() {
        return this.get<Minis>('/v2/account/minis')
    }

    /**
     * This resource returns a list of available sub-endpoints. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/mounts
     * @returns 
     */
    getMounts() {
        return this.get<Mounts>('/v2/account/mounts')
    }

    /**
     * This resource returns the unlocked mount skins of the account. This endpoint is only accessible with a valid API key
     * https://wiki.guildwars2.com/wiki/API:2/account/mounts/skins
     * @returns 
     */
    getMountsSkins() {
        return this.get<Mounts_Skins>('/v2/account/mounts/skins')
    }

    /**
     * This resource returns the unlocked mounts of the account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/mounts/types
     * @returns 
     */
    getMountsTypes() {
        return this.get<Mounts_Types>('/v2/account/mounts/types')
    }

    /**
     * This resource returns information about novelties that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/novelties
     * @returns 
     */
    getNovelties() {
        return this.get<Novelties>('/v2/account/novelties')
    }

    /**
     * This resource returns information about outfits that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/outfits
     * @returns 
     */
    getOutfits() {
        return this.get<Outfits>('/v2/account/outfits')
    }

    /**
     * This resource returns information about progression. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/progression
     * @returns 
     */
    getProgression() {
        return this.get<Progression>('/v2/account/progression')
    }

    /**
     * This resource returns information about pvp heroes that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/pvp/heroes
     * @returns 
     */
    getPvPHeroes() {
        return this.get<PvPHeroes>('/v2/account/pvp/heroes')
    }

    /**
     * This resource returns the completed raid encounters since weekly raid reset. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/raids
     * @returns 
     */
    getRaids() {
        return this.get<Raids>('/v2/account/raids')
    }

    /**
     * This resource returns information about recipes that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/recipes
     * @returns 
     */
    getRecipes() {
        return this.get<Recipes>('/v2/account/recipes')
    }

    /**
     * This resource returns the unlocked skins of the account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/skins
     * @returns 
     */
    getSkins() {
        return this.get<Skins>('/v2/account/skins')
    }

    /**
     * This resource returns information about titles that are unlocked for an account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/titles
     * @returns 
     */
    getTitles() {
        return this.get<Titles>('/v2/account/titles')
    }

    /**
     * This resource returns the currencies of the account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/wallet
     * @returns 
     */
    getWallet() {
        return this.get<Wallet>('/v2/account/wallet')
    }

    /**
     * This resource returns information about which world bosses have been killed by the account since daily-reset. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/account/worldbosses
     * @returns 
     */
    getWorldBosses() {
        return this.get<WorldBosses>('/v2/account/worldbosses')
    }
}
