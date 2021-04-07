import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { Provider } from "./store/index";
import "./sass/index.scss";

ReactDOM.render(
    <Provider>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);
