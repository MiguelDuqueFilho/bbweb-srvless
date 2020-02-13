import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className=" list-inline">
            <li className="list-inline-item">Home</li>
            <li className="list-inline-item">Perfil</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
