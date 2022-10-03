import { BaseApi, ClientOptions } from "../baseAPI";
import { FileId } from "./types";

export class FilesClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getFilesAllIds() {
        return this.get<FileId[]>('/v2/Files')
    }

    getFileById(id: FileId) {
        return this.get<File>(`/v2/Files/${ id }`)
    }

    getFilesByIds(ids: FileId[]) {
        return this.get<File[]>(`/v2/Files?ids=${ ids.join(',') }`)
    }
}