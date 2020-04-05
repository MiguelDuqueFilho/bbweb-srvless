import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { userTypeContent } from "../../services/utils";
import Navbar from "../NavBar/Navbar";

export default function Header(props) {
  const { title, href } = userTypeContent(props.userType);
  return (
    <header>
      <div className="container">
        <div className="title-link">
          <Link className="text-decoration-none" to={href}>
            {title}
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
