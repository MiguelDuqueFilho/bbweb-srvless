import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { urls } from "../services/utils";

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
          title="Be Bride"
          subtitle="Venha conversar com a gente."
          banner={`${urls.BASE_URL}/images/banners/banner_4.png`}
        />
        <div className="main main-raised">
          <Team />
          <Plans />
          <DepositionsSite />
          <Doubts />
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, site: state.site });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Site);
