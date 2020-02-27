import React, { Component } from "react";
import { connect } from "react-redux";

import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import Plans from "./Plans";
import Depositions from "./Depositions";
import Team from "./Team";
import Doubts from "./Doubts";
import FooterSite from "./FooterSite";

class Site extends Component {
  render() {
    return (
      <>
        <HeaderSite />
        <BannerBody />
        <div className="main main-raised">
          <Plans />
          <Depositions />
          <Team />
          <Doubts />
        </div>
        <FooterSite />
      </>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, null)(Site);
