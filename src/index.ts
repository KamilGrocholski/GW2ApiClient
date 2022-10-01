import { GW2ApiClient } from './GW2ApiClient'

export * from './GW2ApiClient'
import dotenv from 'dotenv'
dotenv.config()

const client = new GW2ApiClient({ token: process.env.GW2_TOKEN as string })
// const client = new GW2ApiClient({ token: 'xd' })

const App = async () => {
    try {
        const request = await client.achievements.getGroupsByIds(['B42E2379-9599-46CA-9D4A-40A27E192BBE'])
        console.log(request)
    } catch (err: any) {
        console.log(err.response.data)
    }
}

App()