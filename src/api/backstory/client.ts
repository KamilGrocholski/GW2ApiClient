import { BaseApi, ClientOptions } from "../baseAPI";
import { AnswerId, Answer, QuestionId, Question } from "./types";

export class BackstoryClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    /**
     * Request the list of all available answer ids.
     * https://wiki.guildwars2.com/wiki/API:2/backstory/answers
     * @returns 
     */
    getAnswersAllIds() {
        return this.get<AnswerId[]>('/v2/backstory/answers')
    }

    /**
     * This resource returns information about the Biography answers that are in the game.
     * https://wiki.guildwars2.com/wiki/API:2/backstory/answers
     * @param ids 
     * @returns 
     */
    getAnswersByIds(ids: AnswerId[]) {
        return this.get<Answer[]>(`/v2/backstory/answers?ids=${ ids }`)
    }

    /**
     * This resource returns information about the Biography answers that are in the game.
     * https://wiki.guildwars2.com/wiki/API:2/backstory/answers
     * @param id 
     * @returns 
     */
    getAnswerById(id: AnswerId) {
        return this.get<Answer>(`/v2/backstory/answers/${ id }`)
    }

    /**
     * Request the list of all available question ids/
     * https://wiki.guildwars2.com/wiki/API:2/backstory/questions
     * @returns 
     */
    getQuestionsAllIds() {
        return this.get<QuestionId[]>('/v2/backstory/questions')
    }

    /**
     * This resource returns information about the Biography questions that are in the game.
     * https://wiki.guildwars2.com/wiki/API:2/backstory/questions
     * @param ids 
     * @returns 
     */
    getQuestionsByIds(ids: QuestionId[]) {
        return this.get<Question[]>(`/v2/backstory/questions?ids=${ ids }`)
    }

    /**
     * This resource returns information about the Biography questions that are in the game.
     * https://wiki.guildwars2.com/wiki/API:2/backstory/questions 
     * @param id 
     * @returns 
     */
    getQuestionById(id: QuestionId) {
        return this.get<Question>(`/v2/backstory/questions/${ id }`)
    }
}