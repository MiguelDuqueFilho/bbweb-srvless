import React from "react";
import "./SideBar.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="main-sidebar">
      <div className="logo-dashboard">
        <Logo />
        <Link className="logo-normal text-decoration-none" to="/">
          BeBride
        </Link>
      </div>
      <div className="sidebar">
        <Menu />
      </div>
    </aside>
  );
}
