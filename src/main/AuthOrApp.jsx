import React, { Component } from "react";
import Site from "../site/Site";
import App from "./App";
import Auth from "../auth/Auth";
import { validateToken } from "../auth/AuthAction";
import api from "../services/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AuthOrApp extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user) {
      if (user.type === 0) {
        return <Site />;
      }
    }
    if (user && validToken) {
      api.defaults.headers.common["authorization"] = user.token;
      return <App>{this.props.children}</App>;
    } else if (!user && !validToken) {
      return <Auth />;
    } else {
      return <Site />;
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
