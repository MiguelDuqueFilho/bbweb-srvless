import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { toggleChanged } from "../../main/mainAction";
import { Link } from "react-router-dom";
import { userTypeContent } from "../../services/utils";
import Navbar from "../NavBar/Navbar";
import Grid from "../../component/Grid/Grid";

export default function Header(props) {
  const dispatch = useDispatch();
  const { title, href } = userTypeContent(props.userType);
  const toggle = useSelector((state) => state.app.toggle);
  const [isToggle, setIsToggle] = useState(!toggle);

  const toggleClicked = async () => {
    setIsToggle(!isToggle);
    dispatch(toggleChanged(isToggle));
  };

  return (
    <header>
      <div className="container">
        <Grid cols="1" className="header-toggle">
          <span className="" onClick={() => toggleClicked()}>
            <i className={`fa ${!isToggle ? "fa-times" : "fa-bars"} `}></i>
          </span>
        </Grid>
        <Grid cols="3" className="title-link">
          <Link className="text-decoration-none" to={href}>
            {title}
          </Link>
        </Grid>
        <Grid cols="8">
          <Navbar />
        </Grid>
      </div>
    </header>
  );
}
