import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./HeaderSite.css";
import If from "../common/operator/if";

import { logoff } from "../auth/AuthAction";
import Logo from "../component/Logo/Logo";

class HeaderSite extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.dropdownNavbar = this.dropdownNavbar.bind(this);
    this.state = {
      navClassName: "navbar-transparent",
      collapsed: true,
      dropdown: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  dropdownNavbar() {
    this.setState({
      dropdown: !this.state.dropdown
    });
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.setState({
        navClassName: "navbar-color-on-scroll"
      });
    } else {
      this.setState({
        navClassName: "navbar-transparent "
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  render() {
    let { user } = this.props.auth;
    if (!user) {
      user = [];
    }
    const { name = null, type = null } = user;

    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse mt-4 show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right ";

    const dropdown = this.state.dropdown;
    const classDropdown = dropdown
      ? "dropdown-menu-right dropdown-with-icons"
      : "dropdown-menu dropdown-with-icons";

    return (
      <div className="page-header-site">
        <div className="container">
          <nav
            className={`navbar  fixed-top navbar-expand-lg ${this.state.navClassName}`}
            color-on-scroll="100"
            id="sectionsNav"
          >
            <div className="container-fluid ">
              <div className="navbar-translate d-flex">
                <Logo />
                <button
                  onClick={this.toggleNavbar}
                  className={`${classTwo}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <a className="nav-link " href="/">
                      <i className="fa fa-home"></i> Home
                    </a>
                  </li>
                  <li className="dropdown nav-item">
                    <a
                      href="/#"
                      onClick={this.dropdownNavbar}
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-check-square"></i> Planos
                    </a>
                    <div className={classDropdown}>
                      <a
                        href="/#"
                        className={`dropdown-item ${this.state.navClassName}`}
                      >
                        <i className="fa fa-calendar"></i> Assessoria Completa
                      </a>
                      <a
                        href="/#"
                        className={`dropdown-item ${this.state.navClassName}`}
                      >
                        <i className="fa fa-calendar"></i> Assessoria do Dia
                      </a>
                      <a
                        href="/#"
                        className={`dropdown-item ${this.state.navClassName}`}
                      >
                        <i className="fa fa-calendar"></i> Pedido de Casamento
                      </a>
                      <a
                        href="/#"
                        className={`dropdown-item ${this.state.navClassName}`}
                      >
                        <i className="fa fa-calendar"></i> Consultoria
                      </a>
                    </div>
                  </li>
                  <If test={type !== null}>
                    <li className="nav-item">
                      <a className="nav-link " href="/admin">
                        <i className="fa fa-users"></i> Administração
                      </a>
                    </li>
                  </If>
                  <If test={type}>
                    <li className="nav-item">
                      <a className="nav-link" href="/admin/users/profile">
                        <i className="fa fa-user"></i> {name}
                      </a>
                    </li>
                  </If>
                  <If test={type}>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        href="/logout"
                        onClick={this.props.logoff}
                      >
                        <i className="fa fa-user-times"></i> Logoff
                      </a>
                    </li>
                  </If>
                  <If test={!type}>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-decoration-none"
                        to="/login"
                      >
                        <i className="fa fa-user"></i>
                        <span className="ml-2">Login / Registrar</span>
                      </Link>
                    </li>
                  </If>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="tooltip"
                      title="Siga-nos no Facebook"
                      data-placement="bottom"
                      href="https://www.facebook.com/bebridecasamentos"
                    >
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="tooltip"
                      title="Siga-nos no Instagram"
                      data-placement="bottom"
                      href="https://www.instagram.com/bebridecasamentos"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ logoff }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSite);
