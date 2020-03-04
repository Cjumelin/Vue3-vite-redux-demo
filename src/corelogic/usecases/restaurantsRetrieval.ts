import {ThunkAction} from "redux-thunk";
import {AppState} from "../../store/appState";
import {AnyAction} from "redux";
import {Dispatch} from "react";
import {RestaurantGateway} from "../gateways/restaurantGateway";

type ThunkResult<D> = ThunkAction<void, AppState, D, AnyAction>;

export const retrieveRestaurants = ():
    ThunkResult<{ restaurantGateway: RestaurantGateway }> => {
    return async (dispatch: Dispatch<any>, getState, {restaurantGateway}) => {
        dispatch({type: 'RETRIEVING_RESTAURANTS'});
        const restaurants = await restaurantGateway.retrieve();
        dispatch({type: 'RESTAURANTS_RETRIEVED', payload: restaurants});
    };
};