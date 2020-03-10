import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import "./app.css";
import DashBoard from "../Admin/Dashboard/Dashboard";
import Downloads from "../Admin/Downloads/Downloads";
import Users from "../Admin/Users/Users";
import Events from "../Admin/Events/Events";

export default class Routes extends Component {
  typePath() {
    switch (this.props.userType) {
      case 0:
        return (
          <Switch>
            <Route exact path="/guest" component={Downloads} />
            <Route path="/guest/Downloads" component={Downloads} />
            <Redirect from="*" to="/guest" />
          </Switch>
        );
      case 1:
        return (
          <Switch>
            <Route exact path="/admin" component={DashBoard} />
            <Route path="/admin/dashboard" component={DashBoard} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/events" component={Events} />
            <Redirect from="*" to="/admin" />
          </Switch>
        );
      case 2:
        return (
          <Switch>
            <Route exact path="/client" component={DashBoard} />
            <Route path="/client/dashboard" component={DashBoard} />
            <Redirect from="*" to="/client" />
          </Switch>
        );
      case 3:
        return (
          <Switch>
            <Route exact path="/partner" component={DashBoard} />
            <Route path="/partner/dashboard" component={DashBoard} />
            <Redirect from="*" to="/partner" />
          </Switch>
        );
      default:
        return (
          <Switch>
            <Redirect from="*" to="/" />
          </Switch>
        );
    }
  }

  render() {
    return <div className="content-wrapper mt-2">{this.typePath()}</div>;
  }
}
