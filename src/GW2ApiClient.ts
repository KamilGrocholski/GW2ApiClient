import { 
    ClientOptions, 
    AccountClient, 
    AchievementsClient,
    BackstoryClient,
    BuildClient,
    CharactersClient
} from "./api/"
import { ColorsClient } from "./api/colors"
import { CommerceClient } from "./api/commerce"
import { ContinentsClient } from "./api/continents"

export class GW2ApiClient {
    readonly account: AccountClient
    readonly achievements: AchievementsClient
    readonly backstory: BackstoryClient
    readonly build: BuildClient
    readonly characters: CharactersClient
    readonly colors: ColorsClient
    readonly commerce: CommerceClient
    readonly continents: ContinentsClient

    constructor(clientOptions?: ClientOptions) {
        this.account = new AccountClient(clientOptions)
        this.achievements = new AchievementsClient(clientOptions)
        this.backstory = new BackstoryClient(clientOptions)
        this.build = new BuildClient(clientOptions)
        this.characters = new CharactersClient(clientOptions)
        this.colors = new ColorsClient(clientOptions)
        this.commerce = new CommerceClient(clientOptions)
        this.continents = new ContinentsClient(clientOptions)
    }
}

export type GW2ApiClientType = InstanceType<typeof GW2ApiClient> 