import { BaseApi, ClientOptions } from "../baseAPI";
import { SkillId, Skill } from "./types";

export class SkillsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getSkillsAllIds() {
        return this.get<SkillId[]>('/v2/skills')
    }

    getSkillsById(id: SkillId) {
        return this.get<Skill>(`/v2/skills/${ id }`)
    }

    getSkillsByIds(ids: SkillId[]) {
        return this.get<Skill[]>(`/v2/skills?ids=${ ids.join(',') }`)
    }
}