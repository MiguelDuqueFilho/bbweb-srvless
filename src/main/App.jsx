import React from "react";

import "./app.css";

import Header from "../component/Header/Header";
import SideBar from "../component/SideBar/SideBar";
import Routes from "./Routes";
import Footer from "../component/Footer/Footer";
import Messages from "../common/Messages/Messages";

function App(props) {
  // userType = 0 => only Site
  // userType = 1 => Admin
  // userType = 2 => Client
  // userType = 3 => Partner

  return (
    <div className="app">
      <Header userType={props.userType} />
      <SideBar userType={props.userType} />
      <Routes userType={props.userType} />
      <Footer userType={props.userType} />
      <Messages />
    </div>
  );
}

export default App;
