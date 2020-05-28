import {AnyAction, combineReducers} from 'redux';
import {ThingModel} from "../../coreLogic/thing/thingModel";

const data = (state: ThingModel[] = [], action: AnyAction) => {
    if (action.type === 'THINGS_RETRIEVED')
        return action.payload;
    return state;
};

const fetching = (state: boolean = false, action: AnyAction) => {
    return action.type === 'RETRIEVING_THINGS';
};

export default combineReducers({
    data,
    fetching
});