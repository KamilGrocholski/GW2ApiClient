import { AxiosError, AxiosResponse } from "axios";

export const handleResponse = async (
    response: AxiosResponse
): Promise<AxiosResponse> => {
    if (response.status === 200) {
        console.log('- 200 Status - the requested data has been returned')
        return response
    }
    if (response.status === 206) {
        console.log('- 206 Status - at least one, but not all of the provided IDs are valid')
        return response
    }
    return response
}

export type ResponseErrorType = {
    status: number
    message: string
} 

export const handleResponseError = async (
    error: AxiosError<unknown>
): Promise<AxiosError<unknown>> => {
    if (error.response?.status === 401) {
        console.log('- 401 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions')
    }
    if (error.response?.status === 403) {
        console.log('- 403 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions')
    }
    if (error.response?.status === 404) {
        console.log('- 404 Error - the endpoint does not exist, or all of the provided IDs are invalid')
    }
    if(error.response?.status === 503) {
        console.log('- 503 Error -  the endpoint is disabled')
    }
    return Promise.reject(error)
}