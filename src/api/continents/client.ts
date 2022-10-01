import { ContinentTypes } from ".";
import { BaseApi, ClientOptions } from "../baseAPI";

interface ParamsEnd {
    continentId: ContinentTypes.ContinentsIds[number]
    floorId: ContinentTypes.FloorsIds[number]
    regionId: ContinentTypes.RegionsIds[number]
    mapId: ContinentTypes.MapsIds[number]
}

export class ContinentsClient extends BaseApi {
    constructor(clientOptions?: ClientOptions) {
        super(clientOptions)
    }

    public async getContinentsAllIds() { 
        return (await this.api.get('/v2/continents')).data
    }

    public async getContinentsByIds(continentIds: ContinentTypes.ContinentsIds) { 
        return (await this.api.get(`/v2/continents?ids=${ continentIds.join(',') }`)).data
    }

    public async getContinentById(continentId: ContinentTypes.ContinentsIds[number]) { 
        return (await this.api.get(`/v2/continents/${ continentId }`)).data
    }

    public async getFloorsAllIds(continentId: ContinentTypes.ContinentsIds[number]) { 
        return (await this.api.get(`/v2/continents/${ continentId }/floors`)).data
    }

    public async getFloorById({ continentId, floorId }: { continentId: ContinentTypes.ContinentsIds[number], floorId: ContinentTypes.FloorsIds[number] }): Promise<ContinentTypes.FloorDetails> { 
        return (await this.api.get<ContinentTypes.FloorDetails>(`/v2/continents/${ continentId }/floors/${ floorId }`)).data
    }

    public async getFloorsByIds({ continentId, floorsIds }: { continentId: ContinentTypes.ContinentsIds[number], floorsIds: ContinentTypes.FloorsIds }): Promise<ContinentTypes.FloorsDetails> { 
        return (await this.api.get<ContinentTypes.FloorsDetails>(`/v2/continents/${ continentId }/floors/?ids=${ floorsIds.join(',') }`)).data
    }

    public async getRegionsAllIds({ continentId, floorId }: Omit<ParamsEnd, 'regionId' | 'mapId'>): Promise<ContinentTypes.RegionsIds> { 
        return (await this.api.get<ContinentTypes.RegionsIds>(`/v2/continents/${ continentId }/floors/${ floorId }/regions`)).data
    }

    public async getMapsAllIds({ continentId, floorId, regionId }: Omit<ParamsEnd, 'mapId'>): Promise<ContinentTypes.MapsIds> { 
        return (await this.api.get<ContinentTypes.MapsIds>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/maps`)).data
    }
     
    public async getMapById({ continentId, floorId, regionId, mapId }: ParamsEnd): Promise<ContinentTypes.Map> { 
        return (await this.api.get<ContinentTypes.Map>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }`)).data
    }

    public async getSectors({ continentId, floorId, regionId, mapId }: ParamsEnd): Promise<ContinentTypes.Sectors> { 
        return (await this.api.get<ContinentTypes.Sectors>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/sectors`)).data
    }

    public async getPois({ continentId, floorId, regionId, mapId }: ParamsEnd): Promise<ContinentTypes.PointsOfInterest> { 
        return (await this.api.get<ContinentTypes.PointsOfInterest>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/pois`)).data
    }

    public async getTasks({ continentId, floorId, regionId, mapId }: ParamsEnd): Promise<ContinentTypes.Tasks> { 
        return (await this.api.get<ContinentTypes.Tasks>(`/v2/continents/${ continentId }/floors/${ floorId }/regions/${ regionId }/${ mapId }/tasks`)).data
    }
}
