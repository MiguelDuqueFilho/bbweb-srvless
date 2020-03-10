import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Header(props) {
  function titleAdmin(userType) {
    switch (userType) {
      case 0:
        return "Área do Visitante";
      case 1:
        return "Administração";
      case 2:
        return "Área do Cliente";
      case 3:
        return "Área do Parceiro";
      default:
        return "Não Implementado";
    }
  }

  return (
    <header>
      <div className="container">
        <div className="title-link">
          <Link className="text-decoration-none" to="/dashboard">
            {titleAdmin(props.userType)}
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
