import React from "react";
import "./Menu.css";
import If from "../../common/operator/if";
import MenuItem from "../MenuItem/MenuItem";

// import MenuTree from "../MenuTree/MenuTree";

export default function Menu(props) {
  return (
    <div className="sidebar-menu-group">
      <ul className="sidebar-menu">
        <If test={props.userType === 0}>
          <MenuItem path="/guest/Downloads" label="Download" icon="download" />
        </If>
        <If test={props.userType === 1}>
          <MenuItem
            path="/admin/dashboard"
            label="Dashboard"
            icon="bar-chart"
          />
          <MenuItem path="/admin/users" label="Usuários" icon="users" />
          <MenuItem path="/admin/events" label="Eventos" icon="table" />
          <MenuItem path="/admin/downloads" label="Download" icon="download" />
          <MenuItem path="/admin/uploads" label="Uploads" icon="upload" />
          <MenuItem path="/admin/tasks" label="Tarefas" icon="tasks" />
          <MenuItem path="/admin/depositions" label="Depoimentos" icon="star" />
        </If>
        <If test={props.userType === 2}>
          <MenuItem
            path="/client/dashboard"
            label="Dashboard Cliente"
            icon="bar-chart"
          />
          <MenuItem path="/client/downloads" label="Download" icon="download" />
        </If>
        <If test={props.userType === 3}>
          <MenuItem
            path="/partner/dashboard"
            label="Dashboard Fornecedor"
            icon="bar-chart"
          />
        </If>
      </ul>
    </div>
  );
}
