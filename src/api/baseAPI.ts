import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import { handleResponse, handleResponseError } from "./actionHandlers"

const baseURL = 'https://api.guildwars2.com'
const schemaVersion = '2022-03-23T19:00:00.000Z'
export interface ClientOptions {
    token?: string,
}
export class BaseApi {
    protected readonly api: AxiosInstance

    constructor(clientOptions?: ClientOptions) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Schema-Version': schemaVersion,
                'Authorization': `Bearer ${clientOptions?.token}`
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
            (response: AxiosResponse) => handleResponse(response),
            (error: AxiosError<string>) => handleResponseError(error) 
        )
    }
}
