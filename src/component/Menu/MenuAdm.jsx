import React from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuAdm(props) {
  return (
    <div className="sidebar-menu-group">
      <ul className="sidebar-menu">
        <MenuItem path="/admin" label="Dashboard" icon="dashboard" />
        <MenuItem path="/admin/events" label="Eventos" icon="table" />
        <MenuItem path="/admin/events" label="Outros" icon="table" />
      </ul>
    </div>
  );
}
