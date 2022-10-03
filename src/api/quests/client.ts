import { BaseApi, ClientOptions } from "../baseAPI";
import { QuestId, Quest } from "./types";

export class QuestsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getQuestsAllIds() {
        return this.get<QuestId[]>('/v2/quests')
    }

    getQuestById(id: QuestId) {
        return this.get<Quest>(`/v2/quests/${ id }`)
    }

    getQuestsByIds(ids: QuestId[]) {
        return this.get<Quest[]>(`/v2/quests?ids=${ ids.join(',') }`)
    }
}