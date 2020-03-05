import React, { Component } from "react";
import "./app.css";

import Header from "../component/Header/Header";
import SideBar from "../component/SideBar/SideBar";
import Routes from "./Routes";
import Footer from "../component/Footer/Footer";
import Messages from "../common/Messages/Messages";

export default class main extends Component {
  // userType = 0 => only Site
  // userType = 1 => Admin
  // userType = 2 => Client
  // userType = 3 => Partner

  render() {
    return (
      <div className="app">
        <Header userType={this.props.userType} />
        <SideBar userType={this.props.userType} />
        <Routes userType={this.props.userType} />
        <Footer userType={this.props.userType} />
        <Messages />
      </div>
    );
  }
}
