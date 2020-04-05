import React, { Component } from "react";
import App from "./App";
import Auth from "../auth/Auth";
import Site from "../site/Site";
import { validateToken } from "../auth/AuthAction";
import api from "../services/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AuthOrApp extends Component {
  componentDidMount() {
    if (this.props.auth.validToken) {
      if (this.props.auth.user) {
        this.props.validateToken(this.props.auth.user.token);
      }
    }
  }
  render() {
    const { user, validToken } = this.props.auth;

    if (user && validToken) {
      api.defaults.headers.common["authorization"] = `Bearer ${user.token}`;
      return <App userType={user.type}>{this.props.children}</App>;
    } else if (!user && !validToken) {
      return <Auth />;
    } else {
      return <Site />;
    }
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
