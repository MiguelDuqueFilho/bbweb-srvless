import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./HeaderSite.css";
import If from "../common/operator/if";

import { logout } from "../auth/AuthAction";
import Logo from "../component/Logo/Logo";

class HeaderSite extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.dropdownNavbar = this.dropdownNavbar.bind(this);
    this.logoff = this.logoff.bind(this);
    this.state = {
      navClassName: "navbar-transparent",
      collapsed: true,
      dropdown: false
    };
  }

  logoff() {
    this.props.logout();
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

  renderRows() {
    const types = this.props.site.eventTypes || [];
    return types.map(typ => (
      <a
        key={typ.id}
        href={typ.eventTypeUrl}
        className={`dropdown-item ${this.state.navClassName}`}
      >
        <i className={`fa fa-${typ.eventTypeIcon} mr-2`}></i>{" "}
        {typ.eventTypeName}
      </a>
    ));
  }

  render() {
    const { validToken, user } = this.props.auth;
    const type = user ? user.type : 0;
    const name = user ? user.name : "";

    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse mt-4 show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right ";

    const dropdown = this.state.dropdown;
    const classDropdown = dropdown
      ? "dropdown-menu dropdown-with-icons show"
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
                <ul className="navbar-nav ml-auto mr-auto ">
                  <li className="nav-item level-1">
                    <a className="nav-link " href="/">
                      <i className="fa fa-home mr-2"></i>Home
                    </a>
                  </li>
                  <li className="dropdown nav-item level-1">
                    <span
                      onClick={this.dropdownNavbar}
                      className="dropdown-toggle nav-link mr-10"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-check-square mr-2"></i>Planos
                    </span>
                    <div>
                      <div className={classDropdown}>
                        {this.renderRows(classDropdown)}
                      </div>
                    </div>
                  </li>
                  <If test={validToken}>
                    <li className="nav-item level-1">
                      <If test={type === 0}>
                        <a className="nav-link " href="/guest">
                          <i className="fa fa-gift mr-2"></i>Visitante
                        </a>
                      </If>
                      <If test={type === 1}>
                        <a className="nav-link " href="/admin">
                          <i className="fa fa-university mr-2"></i>Administração
                        </a>
                      </If>
                      <If test={type === 2}>
                        <a className="nav-link " href="/client">
                          <i className="fa fa-transgender-alt mr-2"></i>Clientes
                        </a>
                      </If>
                      <If test={type === 3}>
                        <a className="nav-link " href="/partner">
                          <i className="fa fa-cutlery mr-2"></i>Parceiros
                        </a>
                      </If>
                    </li>
                  </If>
                  <If test={validToken}>
                    <li className="nav-item level-1">
                      <a className="nav-link" href="/">
                        <i className="fa fa-user mr-2"></i>
                        {validToken ? name : ""}
                      </a>
                    </li>
                    <li className="nav-item level-1">
                      <a
                        className="nav-link "
                        href="/logout"
                        onClick={this.logoff}
                      >
                        <i className="fa fa-user-times mr-2"></i>Logoff
                      </a>
                    </li>
                  </If>
                  <If test={!validToken}>
                    <li className="nav-item level-1">
                      <Link
                        className="nav-link text-decoration-none"
                        to="/login"
                      >
                        <i className="fa fa-user mr-2"></i>Login / Registrar
                      </Link>
                    </li>
                  </If>
                  <li className="nav-item level-1">
                    <a
                      className="nav-link"
                      rel="tooltip"
                      title="Siga-nos no Facebook"
                      data-placement="bottom"
                      href="https://www.facebook.com/bebridecasamentos"
                    >
                      <i className="fa fa-facebook-square mr-2"></i>
                    </a>
                  </li>
                  <li className="nav-item level-1">
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

const mapStateToProps = state => ({ auth: state.auth, site: state.site });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSite);
