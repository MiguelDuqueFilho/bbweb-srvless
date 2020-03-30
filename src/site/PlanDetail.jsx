import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTypes } from "./SiteAction";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";

import FooterSite from "./FooterSite";

class PlanDetail extends Component {
  constructor(props) {
    super(props);

    if (typeof props.site.eventTypes === "undefined") {
      this.props.getTypes();
    }
  }

  filterPlan(url) {
    const types = this.props.site.eventTypes || [];
    if (types.length === 0) return;
    const type = types.find(typ => {
      return typ.eventTypeUrl === url;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <h2 className="title text-center">
              <i className={`mr-3 fa fa-${type.eventTypeIcon}`}></i>{" "}
              {type.eventTypeName}
            </h2>
            <h5 className="description text-center text-secundary">
              {type.eventTypeDescription}
            </h5>
          </div>
        </div>
      </div>
    );
  }

  filterContent(url) {
    return (
      <div className="tab-pane text-center gallery">
        <div className="row mb-5 col-12 ml-auto mr-auto">
          <div className="col-md-6 mb-5 mt-5">
            <img
              src={require(`../assets/img${url}_01.png`)}
              alt="img1"
              className="img-raised  img-fluid"
            />
          </div>
          <div className="col-md-6 mb-5 mt-5">
            <img
              src={require(`../assets/img${url}_02.png`)}
              alt="img1"
              className="img-raised  img-fluid"
            />
          </div>
        </div>
        <div className="row mb-5 col-12 ml-auto mr-auto">
          <div className="col-md-6 mb-5 mt-5">
            <img
              src={require(`../assets/img${url}_03.png`)}
              alt="img1"
              className="img-raised  img-fluid"
            />
          </div>
          <div className="col-md-6 mb-5 mt-5">
            <img
              src={require(`../assets/img${url}_04.png`)}
              alt="img1"
              className="img-raised  img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title=""
          subtitle=""
          banner={require(`../assets/img${url}_banner.png`)}
        />
        <div className="main main-raised">
          {this.filterPlan(url)}
          {this.filterContent(url)}
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth, site: state.site });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTypes }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PlanDetail);
