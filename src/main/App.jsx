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
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SideBar />
        <Routes />
        <Footer />
        <Messages />
      </div>
    </BrowserRouter>
  );
}

export default App;
