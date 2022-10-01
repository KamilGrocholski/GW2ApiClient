import { FilesTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

export class FilesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getFilesAllIds(): Promise<FilesTypes.FilesIds> {
        return (await this.api.get<FilesTypes.FilesIds>('/v2/Files')).data
    }

    public async getFileById(id: string): Promise<FilesTypes.File> {
        return (await this.api.get<FilesTypes.File>(`/v2/Files/${ id }`)).data
    }

    public async getFilesByIds(ids: string[]): Promise<FilesTypes.Files> {
        return (await this.api.get<FilesTypes.Files>(`/v2/Files?ids=${ ids.join(',') }`)).data
    }
}