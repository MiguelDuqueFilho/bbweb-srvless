import React from "react";
import "./Logo.css";
import logo from "../../assets/img/logo45-01.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="logo-link text-decoration-none" to="/">
        <img src={logo} alt="logo BeBride" />
      </Link>
    </div>
  );
}
