import {ThingModel} from "./thingModel";

export interface ThingGateway {
    retrieve(): Promise<ThingModel[]>;
}