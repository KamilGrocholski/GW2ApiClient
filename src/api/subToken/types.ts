export type Permissions = 
    | 'account'
    | 'builds'
    | 'characters'
    | 'guilds' 
    | 'inventories'
    | 'progression'
    | 'pvp' 
    | 'tradingpost'
    | 'unlocks' 
    | 'wallet'

export type SubTokenParams = {
    permissions: (Permissions)[]
    expire: Date
    urls?: string[] 
}