export { GW2ApiClient } from './GW2ApiClient'
export type { GW2ApiClientType } from './GW2ApiClient'
export * from './@typesGW2'

import dotevn from 'dotenv'
import { GW2ApiClient } from './GW2ApiClient'
dotevn.config()

const client = new GW2ApiClient({
    apiKey: process.env.GW2_TOKEN as string
})

const App = async () => {
    try {
        const response = await client.pvp.getStats()

        console.log(response.professions.guardian)
    } catch (err) {
        console.log(err)
    }
}

App()