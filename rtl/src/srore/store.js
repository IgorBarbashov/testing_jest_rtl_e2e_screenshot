import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

export const createReduxStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};