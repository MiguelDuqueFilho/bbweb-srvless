import React from "react";
import "./Logo.css";
import logo from "../../assets/img/logo-01-45x45.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logolink">
        <img src={logo} alt="Thumbnail logo BeBride" />
      </Link>
    </div>
  );
}
