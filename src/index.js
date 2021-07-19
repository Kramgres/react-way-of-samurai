import store from "./redux/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);