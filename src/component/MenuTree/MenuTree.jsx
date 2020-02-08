import React from "react";

// import { Container } from './styles';

export default function MenuTree(props) {
  return (
    <li className="treeview">
      <a href={props.path}>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        <i className="fa fa-angle-left pull-right"></i>
      </a>
      <ul className="treeview-menu">{props.children}</ul>
    </li>
  );
}
