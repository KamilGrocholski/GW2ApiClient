import { BaseApi, ClientOptions } from "../baseAPI";
import { CharacterName, Character, Core, Crafting, Equipment, Recipes, HeroPoints, Inventory, Specializations, SuperAdventureBox, Training, BackstoryIds, Skills } from "./types";

export class CharactersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }


    getAllNames() {
        return this.get<CharacterName[]>('/v2/characters')
    }

    getCharacterByNameFullInfo(name: string) {
        return this.get<Character>(`/v2/characters/${ encodeURIComponent(name) }`)
    }

    getAllFullInfo() {
        return this.get<Character[]>('/v2/characters?ids=all')
    }

    getCharacterBackstoryAllIds(name: string) {
        return this.get<BackstoryIds>(`/v2/characters/${ name }/backstory`)
    } 

    getCharacterCore(name: string) {
        return this.get<Core>(`/v2/characters/${ name }/core`)
    }

    getCharacterCrafting(name: string) {
        return this.get<Crafting>(`/v2/characters/${ name }/crafting`)
    }

    getCharacterEquipment(name: string) {
        return this.get<Equipment>(`/v2/characters/${ name }/equipment`)
    }

    // getCharacterEquipmentTabs(name: string): Promise<Equipment> {
    //     return this.get<Equipment>(`/v2/characters/${ name }/equipmenttabs`)
    // }

    getCharacterRecipes(name: string) {
        return this.get<Recipes>(`/v2/characters/${ name }/recipes`)
    }

    getCharacterHeroPoints(name: string) {
        return this.get<HeroPoints>(`/v2/characters/${ name }/heropoints`)
    }

    getCharacterInverntory(name: string) {
        return this.get<Inventory>(`/v2/characters/${ name }/inventory`)
    }

    getCharacterSkills(name: string) {//TODO nie dziala na dla nazwy
        return this.get<Skills>(`/v2/characters/${ name }/skills`)
    }

    getCharacterSpecializations(name: string) {//TODO nie dziala dla nazwy
        return this.get<Specializations>(`/v2/characters/${ name }/specializations`)
    }

    getCharacterSuperAdventureBox(name: string) {
        return this.get<SuperAdventureBox>(`/v2/characters/${ name }/sab`)
    }

    getCharacterTraining(name: string) {
        return this.get<Training>(`/v2/characters/${ name }/training`)
    }

    // getCharacterExtras(name: string): Promise<Extras> {
    //     return this.get<Extras>(`/v2/characters/${ name }/sab`)
    // }
}