import { Permissions } from "../subToken/types"

export type Token = {
    id: string
    name: string
    permissions: (Permissions)[] | null
    type?: 'APIKey' | 'Subtoken'
    expires_at?: string
    issued_at?: string
    urls?: string[] | null 
}