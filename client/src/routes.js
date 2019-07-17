import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from './components/landing.js';
import Main from "./components/main-container";
import AppliedRoute from "./components/AppliedRoute.js";
import Register from "./components/registration-form.js";
import Error from "./components/error.js";

export default ({ childProps }) =>
  
  <Switch>
    <AppliedRoute path="/" exact component={Landing} props={childProps} />
    <AppliedRoute path="/main" exact component={Main} props={childProps} />
    <AppliedRoute path="/register" exact component={Register} props={childProps} />

    <Route component={Error} />
  </Switch>;
