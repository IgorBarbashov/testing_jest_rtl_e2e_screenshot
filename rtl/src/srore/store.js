import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

export const createReduxStore = (preloadedState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
};