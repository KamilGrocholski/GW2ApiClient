import { AxiosError, AxiosResponse } from "axios";
import { ClientOptions } from "./baseAPI";

export const handleResponse = async (
    response: AxiosResponse,
    acceptedStatusCodes: ClientOptions['acceptedStatusCodes']
): Promise<AxiosResponse> => {
    const status = response.status

    if (acceptedStatusCodes && acceptedStatusCodes === 'ONLY_200') {
        if (status === 206) {
            console.log("\u001b[1;31m206 Status - at least one, but not all of the provided IDs are valid")
            throw new Error('- 206 Status - by the chosen options, it is not a valid response status code')
        }
    }

    switch (status) {
        case 200:
            console.log("\u001b[1;32m200 Status - the requested data has been returned")
            return response
        case 206:
            console.log("\u001b[1;33m206 Status - at least one, but not all of the provided IDs are valid")
            return response
        default: 
            console.log(status)
            return response
    }
}

export const handleResponseError = async (
    error: AxiosError<unknown>
): Promise<AxiosError<unknown>> => {
    const status = error.response?.status

    switch (status) {
        case 401:
        case 403: 
            console.log("\u001b[1;31m401 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions")
            return Promise.reject(error.response?.data)
        case 404:
            console.log("\u001b[1;31m404 Error - the endpoint does not exist, or all of the provided IDs are invalid")
            return Promise.reject(error.response?.data)
        case 503:
            console.log("\u001b[1;31m503 Error -  the endpoint is disabled")
            return Promise.reject(error.response?.data)
    }

    return Promise.reject(error)
}