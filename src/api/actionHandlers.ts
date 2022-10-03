import { AxiosError, AxiosResponse } from "axios";
import { ClientOptions } from "./baseAPI";

export const handleResponse = async (
    response: AxiosResponse,
    acceptedStatusCodes: ClientOptions['acceptedStatusCodes']
): Promise<AxiosResponse> => {
    const status = response.status

    if (acceptedStatusCodes && acceptedStatusCodes === 'ONLY_200') {
        if (status === 206) {
            MessageController('RED', '206 Status - at least one, but not all of the provided IDs are valid')
            throw new Error('- 206 Status - by the chosen options, it is not a valid response status code')
        }
    }

    switch (status) {
        case 200:
            MessageController('GREEN', '200 Status - all of the requested data has been returned')
            return response
        case 206:
            MessageController('YELLOW', '206 Status - at least one, but not all of the provided IDs are valid')
            return response
        default: 
        MessageController('YELLOW', 'UNKNOWN Success Status - not 200 or 206')
            return response
    }
}

export const handleResponseError = async (
    error: AxiosError<unknown>
): Promise<AxiosError<unknown>> => {
    const status = error.response?.status

    switch (status) {
        case 401:
            MessageController('RED', '401 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions')
            return Promise.reject(error.response?.data)
        case 403: 
            MessageController('RED', '403 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions')
            return Promise.reject(error.response?.data)
        case 404:
            MessageController('RED', '404 Error - the endpoint does not exist, or all of the provided IDs are invalid')
            return Promise.reject(error.response?.data)
        case 503:
            MessageController('RED', '503 Error -  the endpoint is disabled')
            return Promise.reject(error.response?.data)
        default: 
            MessageController('RED', 'UNKNOWN Error Status - not 401, 403, 404 or 503')
            return Promise.reject(error)
    }
}

const COLORS = {
    WHITE: '\x1b[37m',
    GREEN: '\x1b[32m',
    YELLOW: '\x1b[33',
    RED: '\x1b[31m',
    BLUE: '\x1b[34m',
    NORMAL: '\x1b[0m',
    MAGENTA: '\x1b[35m',
    CYAN: '\x1b[36m'
} as const

// const MessageController = (schemaVersion: string, statusCode: number) => {
export const MessageController = (color: keyof typeof COLORS, message: string) => {
    const PREFIX = 'GW2ApiClient: '
    console.log(PREFIX, COLORS[color], message, COLORS['NORMAL'])
}