import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

export default function MenuItem(props) {
  return (
    <li className="main-menu-item list-unstyled">
      <Link to={props.path} className="menu-item ">
        <i className={`fa fa-${props.icon} `}></i>{" "}
        <span className="m-2">{props.label}</span>
      </Link>
    </li>
  );
}
