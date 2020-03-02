import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Header(props) {
  let titleAdmin = "";
  switch (props.userType) {
    case 1:
      titleAdmin = "Administração";
      break;
    case 2:
      titleAdmin = "Clientes";
      break;
    case 3:
      titleAdmin = "Fornecedores";
      break;
    default:
      titleAdmin = "Não Implementado";
  }
  return (
    <header>
      <div className="container">
        <div className="title-link">
          <Link className="text-decoration-none" to="/dashboard">
            {titleAdmin}
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
