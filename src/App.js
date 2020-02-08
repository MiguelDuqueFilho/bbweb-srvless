import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./global.css";
import "./app.css";
import { HashRouter } from "react-router-dom";
import Logo from "./component/Logo/Logo";
import Nav from "./component/Nav/Nav";
// import SideBar from "./component/SideBar/SideBar";
// import Menu from "./component/Menu/Menu";
import Routes from "./main/Routes";
import Footer from "./component/Footer/Footer";
// import PageLogin from "./view/PageLogin/PageLogin";
import Messages from "./component/Messages/Messages";

function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        {/* <Menu /> */}
        <Routes />
        <Footer />
        <Messages />
      </div>
    </HashRouter>
  );
}

export default App;
