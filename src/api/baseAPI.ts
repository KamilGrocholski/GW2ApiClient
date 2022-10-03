import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse, AxiosRequestHeaders } from "axios"
import { handleResponse, handleResponseError } from "./actionHandlers"

const baseURL = 'https://api.guildwars2.com'
const schemaVersion = '2022-03-23T19:00:00.000Z'


//TODO pages: {size, numberOfPages}
export interface ClientOptions {
    apiKey?: string,
    acceptedStatusCodes?: 'EVERY' | 'ONLY_200' 
    // pages?: {
    //     size?: number
    //     numberOfPages?: number
    // }
}

// const headers = (clientOptions: ClientOptions): AxiosRequestHeaders => {
//     if (clientOptions.pages?.size) {}
//     return {
//         'Content-Type': 'application/json',
//         'X-Schema-Version': schemaVersion,
//         'Authorization': `Bearer ${clientOptions?.apiKey}`,
//     }
// }

export class BaseApi {
    protected readonly api: AxiosInstance

    constructor(clientOptions?: ClientOptions) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Schema-Version': schemaVersion,
                'Authorization': `Bearer ${clientOptions?.apiKey}`,
                // 'X-Page-Size': clientOptions?.pages?.size
            }
        })

        //TODO dodać obsługę interceptorów
        this.api.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                console.log(`GW2 api schema version: ${ schemaVersion }`)
                return config
            },
            (error: AxiosError) => {
                console.log(`GW2 api schema version: ${ schemaVersion }`)
                console.log(error.status)
                return Promise.reject(error)
            }
        )

        this.api.interceptors.response.use(
            (response: AxiosResponse) => handleResponse(response, clientOptions?.acceptedStatusCodes),
            (error: AxiosError<string>) => handleResponseError(error) 
        )
    }

    protected async get<T>(endpoint: string): Promise<T> {
        const response = await this.api.get<T>(endpoint)
        return response.data
    }
}
