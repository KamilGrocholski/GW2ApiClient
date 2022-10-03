import { BaseApi, ClientOptions } from "../baseAPI";
import { StoryId, Story, SeasonId, SeasonStory } from "./types";

export class StoriesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getStoriesAllIds() {
        return this.get<StoryId[]>('/v2/stories')
    }

    getStoryById(id: StoryId) {
        return this.get<Story>(`/v2/stories/${ id }`)
    }

    getStoriesByIds(ids: StoryId[]) {
        return this.get<Story[]>(`/v2/stories?ids=${ ids.join(',') }`)
    }

    getSeasonsAllIds() {
        return this.get<SeasonId[]>(`/v2/stories/seasons`)
    }

    getSeasonStoryById(id: SeasonId) {
        return this.get<SeasonStory>(`/v2/stories/seasons/${ id }`)
    }

    getSeasonStoriesByIds(ids: SeasonId[]) {
        return this.get<SeasonStory[]>(`/v2/stories/seasons?ids=${ ids.join(',') }`)
    }
}