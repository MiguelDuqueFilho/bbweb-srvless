import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

export default function MenuItem(props) {
  return (
    <li>
      <Link to={props.path}>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      </Link>
    </li>
  );
}
