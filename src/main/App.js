import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import Logo from "../component/Logo/Logo";
import Header from "../component/Header/Header";

import SideBar from "../component/SideBar/SideBar";
// import Menu from "./component/Menu/Menu";

import Routes from "./Routes";
import Footer from "../component/Footer/Footer";
import Messages from "../component/Messages/Messages";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Header />
        <SideBar />
        {/* <Menu /> */}
        <Routes />
        <Footer />
        <Messages />
      </div>
    </BrowserRouter>
  );
}

export default App;
