// Clients
import { 
    ClientOptions, 
    AccountClient, 
    AchievementsClient,
    BackstoryClient,
    BuildClient,
    CharactersClient,
    ColorsClient,
    CommerceClient,
    ContinentsClient,
    SubTokenClient,
    CurrenciesClient,
    DailyCraftingClient,
    DungeonsClient,
    EmblemClient,
    EmotesClient,
    FilesClient,
    FinishersClient,
    GlidersClient,
    GuildsClient,
    HomeClient,
    ItemsClient
} from "./api/"

export class GW2ApiClient {
    readonly account: AccountClient
    readonly achievements: AchievementsClient
    readonly backstory: BackstoryClient
    readonly build: BuildClient
    readonly characters: CharactersClient
    readonly colors: ColorsClient
    readonly commerce: CommerceClient
    readonly continents: ContinentsClient
    readonly subToken: SubTokenClient
    readonly currencies: CurrenciesClient
    readonly dailyCrafting: DailyCraftingClient
    readonly dungeons: DungeonsClient
    readonly emblem: EmblemClient
    readonly emotes: EmotesClient
    readonly files: FilesClient
    readonly finishers: FinishersClient
    readonly gliders: GlidersClient
    readonly guilds: GuildsClient
    readonly home: HomeClient
    readonly items: ItemsClient

    constructor(clientOptions?: ClientOptions) {
        this.account = new AccountClient(clientOptions)
        this.achievements = new AchievementsClient(clientOptions)
        this.backstory = new BackstoryClient(clientOptions)
        this.build = new BuildClient(clientOptions)
        this.characters = new CharactersClient(clientOptions)
        this.colors = new ColorsClient(clientOptions)
        this.commerce = new CommerceClient(clientOptions)
        this.continents = new ContinentsClient(clientOptions)
        this.subToken = new SubTokenClient(clientOptions)
        this.currencies = new CurrenciesClient(clientOptions)
        this.dailyCrafting = new DailyCraftingClient(clientOptions)
        this.dungeons = new DungeonsClient(clientOptions)
        this.emblem = new EmblemClient(clientOptions)
        this.emotes = new EmotesClient(clientOptions)
        this.files = new FilesClient(clientOptions)
        this.finishers = new FinishersClient(clientOptions)
        this.gliders = new GlidersClient(clientOptions)
        this.guilds = new GuildsClient(clientOptions)
        this.home = new HomeClient(clientOptions)
        this.items = new ItemsClient(clientOptions)
    }
}

export type GW2ApiClientType = InstanceType<typeof GW2ApiClient> 
