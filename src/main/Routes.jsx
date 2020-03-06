import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import "./app.css";

import DashBoard from "../Admin/Dashboard/Dashboard";
import Events from "../Admin/Events/Events";

export default class Routes extends Component {
  toPath() {
    switch (this.props.userType) {
      case 1:
        return "/Admin";
      case 2:
        return "/client";
      case 3:
        return "/partner";
      default:
        return "";
    }
  }

  render() {
    return (
      <div className="content-wrapper mt-2">
        <Switch>
          <Route exact path={this.toPath()} component={DashBoard} />
          <Route path={`${this.toPath()}/dashboard`} component={DashBoard} />
          <Route path={`${this.toPath()}/events`} component={Events} />
          <Redirect from="*" to={`${this.toPath()}`} />
        </Switch>
      </div>
    );
  }
}
