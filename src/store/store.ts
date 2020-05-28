import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import things from "./reducers/thingsReducer";
import {AppState} from "./appState";
import {composeWithDevTools} from '@reduxjs/redux-devtools-extension-fork';

export const configureStore =
    (dependencies: any) =>
        createStore(combineReducers(
            {
                things
            }),
            composeWithDevTools(
                applyMiddleware(
                    (thunk.withExtraArgument(dependencies) as ThunkMiddleware<AppState, AnyAction>)
                )
            )
        );