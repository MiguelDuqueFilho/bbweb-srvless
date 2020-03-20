import React, { Component } from "react";
import { connect } from "react-redux";
import "./SideBar.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      // <aside className="main-sidebar">
      <aside
        className={`main-sidebar sidebar-in ${this.props.toggle ? "show" : ""}`}
      >
        <div className="logo-dashboard">
          <Logo />
          <Link className="logo-normal text-decoration-none" to="/">
            BeBride
          </Link>
        </div>
        <div className="sidebar">
          <Menu userType={this.props.userType} />
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => ({ toggle: state.app.toggle });
export default connect(mapStateToProps, null)(SideBar);
