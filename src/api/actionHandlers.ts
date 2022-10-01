import { AxiosError, AxiosResponse } from "axios";

export const handleResponse = async (
    response: AxiosResponse
): Promise<AxiosResponse> => {
    const status = response.status

    switch (status) {
        case 200:
            console.log('- 200 Status - the requested data has been returned')
            break
        case 206:
            console.log('- 206 Status - at least one, but not all of the provided IDs are valid')
            break
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
            break
        case 404:
            console.log('- 404 Error - the endpoint does not exist, or all of the provided IDs are invalid')
            break
        case 503:
            console.log('- 503 Error -  the endpoint is disabled')
            break
    }

    return Promise.reject(error)
}