import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import { COLORS, handleResponse, handleResponseError, MessageController } from "./actionHandlers"

export interface ClientOptions {
    apiKey?: string,
    acceptedStatusCodes?: 'EVERY' | 'ONLY_200' 
}

const baseURL = 'https://api.guildwars2.com' as const
const schemaVersion = '2022-03-23T19:00:00.000Z' as const

export class BaseApi {
    protected readonly api: AxiosInstance

    constructor(clientOptions?: ClientOptions) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Schema-Version': schemaVersion,
                'Authorization': `Bearer ${clientOptions?.apiKey}`
            }
        })

        this.api.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                MessageController('CYAN', `>>> The request ${COLORS['BLUE'](config.baseURL ? config.baseURL + config.url : config.url) } is to be sent with the schema version: ${ schemaVersion }`)
                return config
            },
            (error: AxiosError) => {
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
