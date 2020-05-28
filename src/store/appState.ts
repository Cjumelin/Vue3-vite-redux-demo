import {ThingModel} from "../coreLogic/thing/thingModel";

export interface AppState {
    things: {
        data: ThingModel[],
        fetching: Boolean,
    };
}