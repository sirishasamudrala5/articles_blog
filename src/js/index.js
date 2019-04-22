import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import App from "./components/App.jsx";
import Details from "./components/Details.jsx";

render(
    <Provider store={store}>
        <Router>
        <Switch>
            <Route exact path="/" component={App} />
                <Route exact path="/details" component={Details} />
               <Route component={App} />
        </Switch>
        </Router>
    </Provider>,
   
    document.getElementById("root")
);
