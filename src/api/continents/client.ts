import { BaseApi, ClientOptions } from "../baseAPI";
import { Continent, ContinentId, FloorDetails, FloorId, FloorsDetails, MapId, PointsOfInterest, RegionId, Sectors, Tasks, Map } from "./types";

interface ParamsEnd {
    continentId: ContinentId
    floorId: FloorId
    regionId: RegionId
    mapId: MapId
}

export class ContinentsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    getContinentsAllIds() { 
        return this.get('/v2/continents')
    }

    getContinentsByIds(continentIds: ContinentId[]) { 
        return this.get<Continent[]>(`/v2/continents?ids=${ continentIds.join(',') }`)
    }

    getContinentById(continentId: ContinentId) { 
        return this.get<Continent>(`/v2/continents/${ continentId }`)
    }

    getFloorsAllIds(continentId: ContinentId) { 
        return this.get<FloorId[]>(`/v2/continents/${ continentId }/floors`)
    }

    getFloorById({ continentId, floorId }: { continentId: ContinentId, floorId: FloorId }) { 
        return this.get<FloorDetails>(`/v2/continents/${ continentId }/floors/${ floorId }`)
    }

    getFloorsByIds({ continentId, floorsIds }: { continentId: ContinentId, floorsIds: FloorId[] }) { 
        return this.get<FloorsDetails>(`/v2/continents/${ continentId }/floors/?ids=${ floorsIds.join(',') }`)
    }

    getRegionsAllIds({ continentId, floorId }: Omit<ParamsEnd, 'regionId' | 'mapId'>) { 
        return this.get<RegionId[]>(`/v2/continents/${ continentId }/floors/${ floorId }/regions`)
    }

    getMapsAllIds({ continentId, floorId, regionId }: Omit<ParamsEnd, 'mapId'>) { 
        return this.get<MapId[]>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/maps`)
    }
     
    getMapById({ continentId, floorId, regionId, mapId }: ParamsEnd) { 
        return this.get<Map>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }`)
    }

    getSectors({ continentId, floorId, regionId, mapId }: ParamsEnd) { 
        return this.get<Sectors>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/sectors`)
    }

    getPois({ continentId, floorId, regionId, mapId }: ParamsEnd) { 
        return this.get<PointsOfInterest>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/pois`)
    }

    getTasks({ continentId, floorId, regionId, mapId }: ParamsEnd) { 
        return this.get<Tasks>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/tasks`)
    }
}
