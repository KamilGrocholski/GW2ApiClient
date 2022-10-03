import { BaseApi, ClientOptions } from "../baseAPI";
import { AnswerId, Answer, QuestionId, Question } from "./types";

export class BackstoryClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getAnswersAllIds() {
        return this.get<AnswerId[]>('/v2/backstory/answers')
    }
    getAnswersByIds(ids: AnswerId[]) {
        return this.get<Answer[]>(`/v2/backstory/answers?ids=${ ids }`)
    }
    getAnswerById(id: AnswerId) {
        return this.get<Answer>(`/v2/backstory/answers/${ id }`)
    }
    getQuestionsAllIds() {
        return this.get<QuestionId[]>('/v2/backstory/questions')
    }
    getQuestionsByIds(ids: QuestionId[]) {
        return this.get<Question[]>(`/v2/backstory/questions?ids=${ ids }`)
    }
    getQuestionById(id: QuestionId) {
        return this.get<Question>(`/v2/backstory/questions/${ id }`)
    }
}