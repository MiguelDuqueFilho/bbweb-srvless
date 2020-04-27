import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { urls } from "../services/utils";
import { getTypes } from "./SiteAction";
import { validateToken } from "../auth/AuthAction";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import Plans from "./Plans";
import DepositionsSite from "./DepositionsSite";
import Team from "./Team";
import Doubts from "./Doubts";
import FooterSite from "./FooterSite";

class Site extends Component {
  componentDidMount() {
    if (!this.props.auth.validToken) {
      if (this.props.auth.user) {
        this.props.validateToken(this.props.auth.user.token);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title="BeBride"
          subtitle="Venha conversar com a gente."
          banner={`${urls.BASE_URL}/images/banners/banner_2.png`}
        />
        <div className="main main-raised">
          <Plans />
          <DepositionsSite />
          <Team />
          <Doubts />
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, site: state.site });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTypes, validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Site);
