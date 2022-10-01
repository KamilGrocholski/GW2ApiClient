import { BackstoryTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class BackstoryClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getAnswersAllIds(): Promise<BackstoryTypes.AnswersIds> {
        return (await this.api.get<BackstoryTypes.AnswersIds>('/v2/backstory/answers')).data
    }
    public async getAnswersByIds(ids: string[]): Promise<BackstoryTypes.Answers> {
        return (await this.api.get<BackstoryTypes.Answers>(`/v2/backstory/answers?ids=${ ids }`)).data
    }
    public async getAnswerById(id: string): Promise<BackstoryTypes.Answer> {
        return (await this.api.get<BackstoryTypes.Answer>(`/v2/backstory/answers/${ id }`)).data
    }
    public async getQuestionsAllIds(): Promise<BackstoryTypes.QuestionIds> {
        return (await this.api.get<BackstoryTypes.QuestionIds>('/v2/backstory/questions')).data
    }
    public async getQuestionsByIds(ids: number[]): Promise<BackstoryTypes.Questions> {
        return (await this.api.get<BackstoryTypes.Questions>(`/v2/backstory/questions?ids=${ ids }`)).data
    }
    public async getQuestionById(id: number): Promise<BackstoryTypes.Question> {
        return (await this.api.get<BackstoryTypes.Question>(`/v2/backstory/questions/${ id }`)).data
    }
}