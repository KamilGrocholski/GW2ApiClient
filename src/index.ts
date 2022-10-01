import { GW2ApiClient } from './GW2ApiClient'

export * from './GW2ApiClient'

import dotenv from 'dotenv'
dotenv.config()

const client = new GW2ApiClient({ token: process.env.GW2_TOKEN as string })
// const client = new GW2ApiClient({ token: 'xd' })

const App = async () => {
    try {
        const request = await client.characters.getCharacterByNameFullInfo('Mikosiosio')

        if (request) {

        }
        // console.log(client)
    } catch (err: any) {
        console.log(err.response.data)
    }
}

App()