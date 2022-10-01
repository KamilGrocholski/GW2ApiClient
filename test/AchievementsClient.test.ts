import { AchievementsClient } from "../src/api"
import * as types from '../src/'
import dotenv from 'dotenv'
dotenv.config() 

const client = new AchievementsClient({ token: process.env.GW2_TOKEN as string })

test('number[]', async () => {
    const xd = await client.getAllIds()
    expect(xd).toEqual(
        expect.arrayContaining([expect.any(Number)])
    )
})
