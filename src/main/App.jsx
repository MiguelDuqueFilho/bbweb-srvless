import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import Header from "../component/Header/Header";
import SideBar from "../component/SideBar/SideBar";
import Routes from "./Routes";
import Footer from "../component/Footer/Footer";
import Messages from "../common/Messages/Messages";

function App(props) {
  const mode = "adm";
  return (
    <BrowserRouter>
      <div className="app">
        <Header mode={mode} />
        <SideBar mode={mode} />
        <Routes mode={mode} />
        <Footer mode={mode} />
        <Messages />
      </div>
    </BrowserRouter>
  );
}

export default App;
