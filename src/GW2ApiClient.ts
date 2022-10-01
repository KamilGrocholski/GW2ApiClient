import { 
    ClientOptions, 
    AccountClient, 
    AchievementsClient 
} from "./api/"

export class GW2ApiClient {
    readonly account: AccountClient
    readonly achievements: AchievementsClient
    
    constructor(clientOptions?: ClientOptions) {
        this.account = new AccountClient(clientOptions)
        this.achievements = new AchievementsClient(clientOptions)
    }
}

export type GW2ApiClientType = InstanceType<typeof GW2ApiClient> 