import React, { Component } from "react";
import { connect } from "react-redux";
import { urls } from "../services/utils";
import { getModelTypes } from "../services/utils";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";

import FooterSite from "./FooterSite";

class PlanDetailCompleted extends Component {
  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title=""
          subtitle=""
          banner={`${urls.BASE_URL}/images/banners${url}.png`}
        />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ml-auto mr-auto">
                <h2 className="title text-center">{getModelTypes(1).title}</h2>
                <p>{getModelTypes(1).title}</p>
                <p className="description text-center text-secundary"> xxxxx</p>
              </div>
            </div>
          </div>
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, site: state.site });
export default connect(mapStateToProps, null)(PlanDetailCompleted);
