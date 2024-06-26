import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App';
import {createReduxStore} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createReduxStore()}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
