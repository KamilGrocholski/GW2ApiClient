export type ContinentsIds = number[]

export type Continent = {
    id: number
    name: string
    continent_dims: [number, number]
    min_zoom: number
    max_zoom: number
    floors: number[]
}

export type MapRect = [[number, number], [number, number]]
export type LabelCoord = [number, number]
export type Coord = [number, number]
export type Bounds = Coord[] 
export type ContinentRect = [[number, number], [number, number]]
// type Dimension = [number, number]

export type Map = {
    name: string
    min_level: number
    max_level: number
    default_floor: number
    label_coord: LabelCoord
    map_rect: MapRect
    continent_rect: ContinentRect
    points_of_interest: PointsOfInterest[]
}

export type MapsIds = number[]

export type FloorDetails = {
    id: number
    texture_dims: [number, number]
    clamped_view: [ [number, number], [number, number] ]
    regions: Region
    tasks: Tasks
    skill_challanges: SkillChallanges
    sectors: Sectors
    adventures: Adventures
    mastery_points: MasteryPoints
}

export type FloorsIds = number[]

export type FloorsDetails = FloorDetails[]

export type Region = {
    name: string
    label_coord: LabelCoord
    continent_rect: ContinentRect
    maps: Map
}

export type RegionsIds = string[]

export type PointsOfInterest = {
    name: string
    type?: 'landmark' | 'waypoint' | 'vista' | 'unlock' //TODO
    floor: number
    coord: Coord
    id: number
    chat_link: string
    icon?: string 
}

export type Tasks = {
    objective: string
    level: number
    coord: Coord
    bound: Bounds
    id: number
    chat_link: string
}

export type SkillChallanges = {
    coord: Coord
    id: string
}

export type Sectors = {
    name: string
    level: number 
    coord: Coord
    bounds: Bounds
    chat_link: string
    id: number
}

export type Adventures = {
    coord: Coord
    id: string
    name: string
    description: string
}

export type MasteryPoints = {
    coord: Coord
    id: number
    region: string
}

