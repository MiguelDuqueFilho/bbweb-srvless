import React, { Component } from "react";
import App from "../App";
import Auth from "../auth/Auth";
import { validateToken } from "./AuthAction";
import api from "../services/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AuthOrApp extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      api.defaults.headers.common["authorization"] = user.token;
      return <App />;
    } else if (!user && !validToken) {
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
