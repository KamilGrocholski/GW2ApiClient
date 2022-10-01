import { 
    ClientOptions, 
    AccountClient, 
    AchievementsClient,
    BackstoryClient,
    BuildClient,
    CharactersClient
} from "./api/"

export class GW2ApiClient {
    readonly account: AccountClient
    readonly achievements: AchievementsClient
    readonly backstory: BackstoryClient
    readonly build: BuildClient
    readonly characters: CharactersClient
    
    constructor(clientOptions?: ClientOptions) {
        this.account = new AccountClient(clientOptions)
        this.achievements = new AchievementsClient(clientOptions)
        this.backstory = new BackstoryClient(clientOptions)
        this.build = new BuildClient(clientOptions)
        this.characters = new CharactersClient(clientOptions)
    }
}

export type GW2ApiClientType = InstanceType<typeof GW2ApiClient> 