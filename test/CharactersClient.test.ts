import { CharactersClient } from "../src/api"
import * as types from '../src/'
import dotenv from 'dotenv'
dotenv.config() 

const client = new CharactersClient({ token: process.env.GW2_TOKEN as string })

test('number[]', async () => {
    const request = await client.getCharacterByNameFullInfo('Mikosiosio')
    const a = request.active_build_tab
    const b = request.active_equipment_tab
    const c = request.age
    const d = request.bags
    const e = request.build_tabs
    const f = request.build_tabs_unlocked
    const g = request.crafting
    const h = request.created
    const i = request.deaths
    const j = request.equipment
    const k = request.equipment_pvp //TODO
    const l = request.equipment_tabs_unlocked
    const m = request.gender
    const n = request.guild
    const o = request.level
    const p = request.name
    const r = request.profession
    const s = request.skills 
    const u = request.race
    const w = request.recipes
    const x = request.training
    const y = request.specializations
    const z = request.wvw_abilities

    expect(a).not.toBeUndefined()
    expect(b).not.toBeUndefined()
    expect(c).not.toBeUndefined()
    expect(d).not.toBeUndefined()
    expect(e).not.toBeUndefined()
    expect(f).not.toBeUndefined()
    expect(g).not.toBeUndefined()
    expect(h).not.toBeUndefined()
    expect(i).not.toBeUndefined()
    expect(j).not.toBeUndefined()
    // expect(k).not.toBeUndefined()
    expect(l).not.toBeUndefined()
    expect(m).not.toBeUndefined()
    expect(n).not.toBeUndefined()
    expect(o).not.toBeUndefined()
    expect(p).not.toBeUndefined()
    expect(r).not.toBeUndefined()
    // expect(s).not.toBeUndefined()
    // expect(t).not.toBeUndefined()
    expect(u).not.toBeUndefined()
    expect(w).not.toBeUndefined()
    expect(x).not.toBeUndefined()
    // expect(y).not.toBeUndefined()
    expect(z).not.toBeUndefined()
})
