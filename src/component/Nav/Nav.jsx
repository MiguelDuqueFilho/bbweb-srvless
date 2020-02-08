import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <aside className="menu-area">
      <nav className="menu bg-dark sidebar h-100">
        <div className="sidebar-stick">
          {/* Refatorar em casa! */}
          <ul className="nav flex-column">
            <li className="nav-item ">
              <Link to="/">
                <i className="fa fa-home"></i> Início
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/dashboard">
                <i className="fa fa-users"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Login">
                <i className="fa fa-users"></i> Usuários
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/buttons">
                <i className="fa fa-users"></i> Buttons
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/accordions">
                <i className="fa fa-users"></i> Accordions
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/tabs">
                <i className="fa fa-users"></i> Tabs
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/cardtable">
                <i className="fa fa-users"></i> Card / Table
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
