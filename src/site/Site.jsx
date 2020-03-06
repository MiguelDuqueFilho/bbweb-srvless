import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTypes } from "./SiteAction";
import { validateToken } from "../auth/AuthAction";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import Plans from "./Plans";
import Depositions from "./Depositions";
import Team from "./Team";
import Doubts from "./Doubts";
import FooterSite from "./FooterSite";
import Banner from "../assets/img/banner-inicial-4.png";

class Site extends Component {
  constructor(props) {
    super(props);
    this.props.getTypes();
    if (!this.props.auth.validToken) {
      if (this.props.auth.user) {
        this.props.validateToken(this.props.auth.user.token);
      }
    }
  }
  // componentDidMount() {
  //   this.props.getTypes();
  //   if (!this.props.auth.validToken) {
  //     if (this.props.auth.user) {
  //       this.props.validateToken(this.props.auth.user.token);
  //     }
  //   }
  // }
  render() {
    return (
      <>
        <HeaderSite />
        <BannerBody
          title="BeBride"
          subtitle="Venha conversar com a gente."
          banner={Banner}
        />
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

const mapStateToProps = state => ({ auth: state.auth, site: state.site });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTypes, validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Site);
