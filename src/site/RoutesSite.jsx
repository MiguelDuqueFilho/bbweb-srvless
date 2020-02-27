import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Site from "../site/Site";
import Auth from "../auth/Auth";
import AuthOrApp from "../main/AuthOrApp";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/login" component={Auth} />
      <Route path="/admin" component={AuthOrApp} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
