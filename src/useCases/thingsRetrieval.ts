import {ThunkAction} from "redux-thunk";
import {AnyAction, Dispatch} from "redux";
import {ThingGateway} from "../coreLogic/thing/thingGateway";
import {AppState} from "../store/appState";

type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;


export const retrieveThings = (): ThunkResult<{ thingGateway: ThingGateway }> =>
    async (dispatch: Dispatch<any>, getState, {thingGateway}): Promise<void> => {
        dispatch({type: 'RETRIEVING_THINGS'});
        const things = await thingGateway.retrieve();
        dispatch({type: 'THINGS_RETRIEVED', payload: things});
    };