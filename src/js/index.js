import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> 0fb04462f943eba9c3b0cce245c9a60cd356753a


import App from "./components/App.jsx";
import Details from "./components/Details.jsx";

render(
    <Provider store={store}>
        <Router>
<<<<<<< HEAD
        <Switch>
            <Route exact path="/" component={App} />
                <Route exact path="/details" component={Details} />
               <Route component={App} />
        </Switch>
=======
            <Route exact path="/" component={App} />
                <Route path="/details" component={Details} />
>>>>>>> 0fb04462f943eba9c3b0cce245c9a60cd356753a
        </Router>
    </Provider>,
   
    document.getElementById("root")
);
