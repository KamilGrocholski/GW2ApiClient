import { AxiosError, AxiosResponse } from "axios";

export const handleResponse = async (
    response: AxiosResponse
): Promise<AxiosResponse> => {
    const status = response.status

    switch (status) {
        case 200:
            console.log('- 200 Status - the requested data has been returned')
            return response
        case 206:
            console.log('- 206 Status - at least one, but not all of the provided IDs are valid')
            return response
    }

    return response
}

export const handleResponseError = async (
    error: AxiosError<unknown>
): Promise<AxiosError<unknown>> => {
    const status = error.response?.status

    switch (status) {
        case 401:
        case 403: 
            console.log('- 401 Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions')
            return Promise.reject(error)
        case 404:
            console.log('- 404 Error - the endpoint does not exist, or all of the provided IDs are invalid')
            return Promise.reject(error)
        case 503:
            console.log('- 503 Error -  the endpoint is disabled')
            return Promise.reject(error)
    }

    return Promise.reject(error)
}