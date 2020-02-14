import React from "react";
import "./SideBar.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="main-sidebar">
      <container className="logo-dashboard">
        <Logo />
        <Link to="/" className="logo-normal">
          BeBride
        </Link>
      </container>
      <container className="sidebar">
        <Menu />
      </container>
    </aside>
  );
}
