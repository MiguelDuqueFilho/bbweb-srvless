import React from "react";
import "./SideBar.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

export default function SideBar() {
  return (
    <aside className="main-sidebar">
      <Logo />
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  );
}
