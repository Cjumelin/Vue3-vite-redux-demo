import {AnyAction, combineReducers} from 'redux';
import {Restaurant} from "../../corelogic/models/restaurant";


const data = (state: Restaurant[] = [], action: AnyAction) => {
    if (action.type === 'RESTAURANTS_RETRIEVED')
        return action.payload;
    return state;
};

const fetching = (state: boolean = false, action: AnyAction) => {
    return action.type === 'RETRIEVING_RESTAURANTS';
};


export default combineReducers({
    data,
    fetching
});