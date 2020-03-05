import React from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuAdm(props) {
  return (
    <div className="sidebar-menu-group">
      <ul className="sidebar-menu">
        <MenuItem path="/client" label="Dashboard Cliente" icon="dashboard" />
        <MenuItem path="/client/events" label="Eventos Clientes" icon="table" />
      </ul>
    </div>
  );
}
