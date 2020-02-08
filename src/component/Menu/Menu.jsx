import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import MenuTree from "../MenuTree/MenuTree";
import "./Menu.css";

export default function Menu() {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="/dashboard" label="Dashboard" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem path="/events" label="Eventos" icon="table" />
      </MenuTree>
    </ul>
  );
}
