import React from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
// import MenuTree from "../MenuTree/MenuTree";

export default function Menu() {
  return (
    <div className="sidebar-menu-group">
      <ul className="sidebar-menu">
        <MenuItem path="/dashboard" label="Dashboard" icon="dashboard" />
        {/* <MenuTree label="Cadastro" icon="edit">
        <MenuItem path="/events" label="Eventos" icon="table" />
      </MenuTree> */}
        <MenuItem path="/events" label="Eventos" icon="table" />
        <MenuItem path="/buttons" label="Buttons" icon="user" />
        <MenuItem path="/accordions" label="Accordions" icon="user" />
        <MenuItem path="/tabs" label="Tabs" icon="user" />
        <MenuItem path="/cardtable" label="Card / Tables" icon="user" />
      </ul>
    </div>
  );
}
