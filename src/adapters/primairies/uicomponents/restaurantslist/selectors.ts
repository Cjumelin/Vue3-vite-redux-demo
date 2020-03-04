import {AppState} from "../../../../store/appState";

export const getRestaurantsSelector = (state: AppState) => {
    return {data: state.restaurants.data, fetching: state.restaurants.fetching};
};

export const getNumberOfRestaurants = (state: AppState) =>
    state.restaurants.data.length;

