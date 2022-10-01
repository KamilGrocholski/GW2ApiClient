import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import dotenv from 'dotenv'
import { handleResponse, handleResponseError, ResponseErrorType } from "./actionHandlers"
dotenv.config()

const baseURL = 'https://api.guildwars2.com'
export interface ClientOptions {
    token?: string,
}
export class BaseApi {
    protected api: AxiosInstance

    constructor(clientOptions?: ClientOptions) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Schema-Version': '2022-03-23T19:00:00.000Z',
                'Authorization': `Bearer ${clientOptions?.token}`
            }
        })

        //TODO dodać obsługę interceptorów
        this.api.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                console.log('request')
                return config
            },
            (error: AxiosError) => {
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
