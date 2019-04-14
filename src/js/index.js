import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import App from "./components/App.jsx";
import Details from "./components/Details.jsx";

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
                <Route path="/details" component={Details} />
        </Router>
    </Provider>,
   
    document.getElementById("root")
);
