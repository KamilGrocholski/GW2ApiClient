import { CharactersTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class CharactersClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }


    public async getAllNames(): Promise<CharactersTypes.CharactersNames> {
        return (await this.api.get<CharactersTypes.CharactersNames>('/v2/characters')).data
    }

    public async getCharacterByNameFullInfo(name: string): Promise<CharactersTypes.Character> {
        return (await this.api.get<CharactersTypes.Character>(`/v2/characters/${ encodeURIComponent(name) }`)).data
    }

    public async getAllFullInfo(): Promise<CharactersTypes.Characters> {
        return (await this.api.get<CharactersTypes.Characters>('/v2/characters?ids=all')).data
    }

    public async getCharacterBackstoryAllIds(name: string): Promise<CharactersTypes.BackstoryIds> {
        return (await this.api.get<CharactersTypes.BackstoryIds>(`/v2/characters/${ name }/backstory`)).data
    } 

    public async getCharacterCore(name: string): Promise<CharactersTypes.Core> {
        return (await this.api.get<CharactersTypes.Core>(`/v2/characters/${ name }/core`)).data
    }

    public async getCharacterCrafting(name: string): Promise<CharactersTypes.Crafting> {
        return (await this.api.get<CharactersTypes.Crafting>(`/v2/characters/${ name }/crafting`)).data
    }

    public async getCharacterEquipment(name: string): Promise<CharactersTypes.Equipment> {
        return (await this.api.get<CharactersTypes.Equipment>(`/v2/characters/${ name }/equipment`)).data
    }

    // public async getCharacterEquipmentTabs(name: string): Promise<CharactersTypes.Equipment> {
    //     return (await this.api.get<CharactersTypes.Equipment>(`/v2/characters/${ name }/equipmenttabs`)).data
    // }

    public async getCharacterRecipes(name: string): Promise<CharactersTypes.Recipes> {
        return (await this.api.get<CharactersTypes.Recipes>(`/v2/characters/${ name }/recipes`)).data
    }

    public async getCharacterHeroPoints(name: string): Promise<CharactersTypes.HeroPoints> {
        return (await this.api.get<CharactersTypes.HeroPoints>(`/v2/characters/${ name }/heropoints`)).data
    }

    public async getCharacterInverntory(name: string): Promise<CharactersTypes.Inventory> {
        return (await this.api.get<CharactersTypes.Inventory>(`/v2/characters/${ name }/inventory`)).data
    }

    public async getCharacterSkills(name: string): Promise<CharactersTypes.Skills> {//TODO nie dziala na dla nazwy
        return (await this.api.get<CharactersTypes.Skills>(`/v2/characters/${ name }/skills`)).data
    }

    public async getCharacterSpecializations(name: string): Promise<CharactersTypes.Specializations> {//TODO nie dziala dla nazwy
        return (await this.api.get<CharactersTypes.Specializations>(`/v2/characters/${ name }/specializations`)).data
    }

    public async getCharacterSuperAdventureBox(name: string): Promise<CharactersTypes.SuperAdventureBox> {
        return (await this.api.get<CharactersTypes.SuperAdventureBox>(`/v2/characters/${ name }/sab`)).data
    }

    public async getCharacterTraining(name: string): Promise<CharactersTypes.Training> {
        return (await this.api.get<CharactersTypes.Training>(`/v2/characters/${ name }/training`)).data
    }

    // public async getCharacterExtras(name: string): Promise<CharactersTypes.Extras> {
    //     return (await this.api.get<CharactersTypes.Extras>(`/v2/characters/${ name }/sab`)).data
    // }
}