import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="title-link">
          <Link className="text-decoration-none" to="/dashboard">
            Administração
          </Link>
        </div>
        <nav className="nav-header ">
          <ul className=" list-inline ">
            <li className="nav-link list-inline-item">
              <Link className="text-decoration-none" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-link list-inline-item">
              <Link className="text-decoration-none" to="/perfil">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
