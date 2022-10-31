import { BaseApi, ClientOptions } from "../baseAPI";
import { CharacterName, Character, Core, Crafting, Equipment, Recipes, HeroPoints, Inventory, Specializations, SuperAdventureBox, Training, BackstoryIds, Skills } from "./types";

export class CharactersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    // This endpoint is only accessible with a valid API key.

    /**
     * Returns an array of characters by name attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters
     * @returns 
     */
    getAllNames() {
        return this.get<CharacterName[]>('/v2/characters')
    }

    /**
     * This resource returns summary of the character information. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters
     * @param name 
     * @returns 
     */
    getCharacterByNameFullInfo(name: string) {
        return this.get<Character>(`/v2/characters/${ encodeURIComponent(name) }`)
    }

    /**
     * This resource returns summary of all the characters informations. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters
     * @returns 
     */
    getAllFullInfo() {
        return this.get<Character[]>('/v2/characters?ids=all')
    }

    /**
     * Returns an object containing an array of strings representing backstory answer IDs pertaining to the questions answered during character creation. References /v2/backstory/answers. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/backstory
     * @param name 
     * @returns 
     */
    getCharacterBackstoryAllIds(name: string) {
        return this.get<BackstoryIds>(`/v2/characters/${ name }/backstory`)
    } 

    /**
     * This resource returns core information about a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/core  
     * @param name 
     * @returns 
     */
    getCharacterCore(name: string) {
        return this.get<Core>(`/v2/characters/${ name }/core`)
    }

    /**
     * This resource returns information about the crafting disciplines available to a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/crafting
     * @param name 
     * @returns 
     */
    getCharacterCrafting(name: string) {
        return this.get<Crafting>(`/v2/characters/${ name }/crafting`)
    }

    /**
     * This resource returns information about the equipment on a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/equipment
     * @param name 
     * @returns 
     */
    getCharacterEquipment(name: string) {
        return this.get<Equipment>(`/v2/characters/${ name }/equipment`)
    }

    // getCharacterEquipmentTabs(name: string): Promise<Equipment> {
    //     return this.get<Equipment>(`/v2/characters/${ name }/equipmenttabs`)
    // }

    /**
     * This resource returns information about recipes that the given character can use. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/recipes
     * @param name 
     * @returns 
     */
    getCharacterRecipes(name: string) {
        return this.get<Recipes>(`/v2/characters/${ name }/recipes`)
    }

    /**
     * This resource returns information about the hero points obtained by a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/heropoints
     * @param name 
     * @returns 
     */
    getCharacterHeroPoints(name: string) {
        return this.get<HeroPoints>(`/v2/characters/${ name }/heropoints`)
    }

    /**
     * This resource returns information about the inventory of a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/inventory
     * @param name 
     * @returns 
     */
    getCharacterInverntory(name: string) {
        return this.get<Inventory>(`/v2/characters/${ name }/inventory`)
    }

    /**
     * This resource returns information about the skills equipped on a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/skills
     * @param name 
     * @returns 
     */
    getCharacterSkills(name: string) {
        return this.get<Skills>(`/v2/characters/${ name }/skills`)
    }

    /**
     * This resource returns information about the specializations equipped on a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/specializations
     * @param name 
     * @returns 
     */
    getCharacterSpecializations(name: string) {
        return this.get<Specializations>(`/v2/characters/${ name }/specializations`)
    }


    /**
     * This resource returns information about Super Adventure Box on a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/sab
     * @param name 
     * @returns 
     */
    getCharacterSuperAdventureBox(name: string) {
        return this.get<SuperAdventureBox>(`/v2/characters/${ name }/sab`)
    }

    /**
     * This resource returns information about the training of a character attached to a specific account. This endpoint is only accessible with a valid API key.
     * https://wiki.guildwars2.com/wiki/API:2/characters/:id/training
     * @param name 
     * @returns 
     */
    getCharacterTraining(name: string) {
        return this.get<Training>(`/v2/characters/${ name }/training`)
    }

    // getCharacterExtras(name: string): Promise<Extras> {
    //     return this.get<Extras>(`/v2/characters/${ name }/sab`)
    // }
}