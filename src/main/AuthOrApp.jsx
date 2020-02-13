import React, { Component } from "react";
import App from "./App";
import Auth from "../auth/Auth";
import { validateToken } from "../auth/AuthAction";
import api from "../services/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AuthOrApp extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    if (this.props.auth.user) {
      console.log("validateToken");
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      api.defaults.headers.common["authorization"] = user.token;
      console.log("authorization");
      return <App>{this.props.children}</App>;
    } else if (!user && !validToken) {
      console.log("Auth");
      return <Auth />;
    } else {
      return false;
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
