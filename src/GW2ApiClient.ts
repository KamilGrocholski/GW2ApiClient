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
    ItemsClient,
    ItemStatsClient,
    LegendsClient,
    MailCarriersClient,
    MapsClient,
    MaterialsClient,
    MinisClient,
    MountsClient,
    NoveltiesClient,
    MapChestsClient,
    OutfitsClient,
    PetsClient,
    ProfessionsClient,
    PvPClient,
    QuaggansClient,
    RacesClient,
    RaidsClient,
    RecipesClient,
    QuestsClient,
    SkillsClient,
    SkinsClient,
    SpecializationsClient,
    StoriesClient,
    TitlesClient,
    TokenInfoClient,
    TraitsClient,
    WorldBossesClient,
    WorldsClient,
    WvWClient
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
    readonly itemStats: ItemStatsClient
    readonly legends: LegendsClient
    readonly mailCarriers: MailCarriersClient
    readonly mapChests: MapChestsClient
    readonly maps: MapsClient
    readonly materials: MaterialsClient
    readonly minis: MinisClient
    readonly mounts: MountsClient
    readonly novelties: NoveltiesClient
    readonly outfits: OutfitsClient
    readonly pets: PetsClient
    readonly professions: ProfessionsClient
    readonly pvp: PvPClient
    readonly quaggans: QuaggansClient
    readonly races: RacesClient
    readonly raids: RaidsClient
    readonly recipes: RecipesClient
    readonly quests: QuestsClient
    readonly skills: SkillsClient
    readonly skins: SkinsClient
    readonly specializations: SpecializationsClient
    readonly stories: StoriesClient
    readonly titles: TitlesClient
    readonly tokenInfo: TokenInfoClient
    readonly traits: TraitsClient
    readonly worldBosses: WorldBossesClient
    readonly worlds: WorldsClient
    readonly wvw: WvWClient

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
        this.itemStats = new ItemStatsClient(clientOptions)
        this.legends = new LegendsClient(clientOptions)
        this.mailCarriers = new MailCarriersClient(clientOptions)
        this.mapChests = new MapChestsClient(clientOptions)
        this.maps = new MapsClient(clientOptions)
        this.materials = new MaterialsClient(clientOptions)
        this.minis = new MinisClient(clientOptions)
        this.mounts = new MountsClient(clientOptions)
        this.novelties = new NoveltiesClient(clientOptions)
        this.outfits = new OutfitsClient(clientOptions)
        this.pets = new PetsClient(clientOptions)
        this.professions = new ProfessionsClient(clientOptions)
        this.pvp = new PvPClient(clientOptions)
        this.quaggans = new QuaggansClient(clientOptions)
        this.quests = new QuestsClient(clientOptions)
        this.races = new RacesClient(clientOptions)
        this.raids = new RaidsClient(clientOptions)
        this.recipes = new RecipesClient(clientOptions)
        this.skills = new SkillsClient(clientOptions)
        this.skins = new SkinsClient(clientOptions)
        this.specializations = new SpecializationsClient(clientOptions)
        this.stories = new StoriesClient(clientOptions)
        this.titles = new TitlesClient(clientOptions)
        this.tokenInfo = new TokenInfoClient(clientOptions)
        this.traits = new TraitsClient(clientOptions)
        this.worldBosses = new WorldBossesClient(clientOptions)
        this.worlds = new WorldsClient(clientOptions)
        this.wvw = new WvWClient(clientOptions)
    }
}

export type GW2ApiClientType = InstanceType<typeof GW2ApiClient> 
