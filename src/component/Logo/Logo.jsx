import React from "react";
import "./Logo.css";
import logo from "../../assets/img/logo-01-45x45.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  );
}
