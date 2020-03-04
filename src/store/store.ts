import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import restaurants from "./reducers/restaurantsReducer";
import {AppState} from "./appState";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = (dependencies: any) => {
    return createStore(combineReducers({
            restaurants
        }), composeWithDevTools(applyMiddleware(
        (thunk.withExtraArgument(dependencies) as ThunkMiddleware<AppState, AnyAction>)))
    );
};
