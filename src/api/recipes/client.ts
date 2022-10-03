import { BaseApi, ClientOptions } from "../baseAPI";
import { RecipeId, Recipe } from "./types";

export class RecipesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getRecipesAllIds() {
        return this.get<RecipeId[]>('/v2/recipes')
    }

    getRecipeById(id: RecipeId) {
        return this.get<Recipe>(`/v2/recipes/${ id }`)
    }

    getRecipesByIds(ids: RecipeId[]) {
        return this.get<Recipe[]>(`/v2/recipes?ids=${ ids.join(',') }`)
    }

    getSearchInput(id: number) {
        return this.get<number[]>(`/v2/recipes/search?input=${ id }`)
    }

    getSearchOutput(id: number) {
        return this.get<number[]>(`/v2/recipes/search?output=${ id }`)
    }
}