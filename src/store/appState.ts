import {Restaurant} from "../corelogic/models/restaurant";

export interface AppState {
    restaurants: {
        data: Restaurant[];
        fetching: boolean;
    }
}
