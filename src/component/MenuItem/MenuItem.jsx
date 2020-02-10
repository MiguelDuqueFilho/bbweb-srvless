import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

export default function MenuItem(props) {
  return (
    <li>
      <Link to={props.path}>
        <i className={`fa fa-${props.icon} text-white`}></i>{" "}
        <span className="text-white">{props.label}</span>
      </Link>
    </li>
  );
}
