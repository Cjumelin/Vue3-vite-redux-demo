import {AppState} from "../../store/appState";

export const getThingsSelector =
    (state: AppState) => state.things;

export const getNumberOfThings =
    (state: AppState) => state.things.data.length;