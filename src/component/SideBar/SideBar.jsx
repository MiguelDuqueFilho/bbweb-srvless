import React from "react";
import "./SideBar.css";
import Menu from "../Menu/Menu";

export default function SideBar() {
  return (
    <aside className="main-sidebar">
      <section className="sidebar  text-white sidebar h-100">
        <Menu />
      </section>
    </aside>
  );
}
