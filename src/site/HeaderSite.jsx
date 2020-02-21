import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./HeaderSite.css";
import logo from "../assets/img/logo45-01.png";
import { logoff } from "../auth/AuthAction";

class HeaderSite extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="page-header-site">
        <div className="container">
          <nav
            className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
            color-on-scroll="100"
            id="sectionsNav"
          >
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="/">
                  <div className="logo-image">
                    <img
                      src={logo}
                      alt=""
                      width="60"
                      height="60"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link nav-link-bebride" href="/">
                      <i className="fa fa-home"></i> Home
                    </a>
                  </li>

                  <li className="dropdown nav-item">
                    <a
                      href="/#"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                    >
                      <i class="fa fa-check-square"></i> Planos
                    </a>
                    <div className="dropdown-menu dropdown-with-icons">
                      <a href="/#" className="dropdown-item">
                        <i class="fa fa-data-range"></i>
                        Assessoria Completa
                      </a>
                      <a href="/#" className="dropdown-item">
                        <i class="fa fa-today"></i>
                        Assessoria do Dia
                      </a>
                      <a href="/#" className="dropdown-item">
                        <i class="fa fa-calendar"></i>
                        Pedido de Casamento
                      </a>
                      <a href="/#" className="dropdown-item">
                        <i class="fa fa-event-note"></i>
                        Consultoria
                      </a>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link nav-link-bebride" href="/admin">
                      <i class="fa fa-users"></i> Administração
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/customer">
                      <i class="fa fa-male"></i> Cliente
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/admin/users/profile">
                      <i class="fa fa-user"></i> {user.name}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-link-bebride"
                      href="/logout"
                      onClick={this.props.logoff}
                    >
                      <i class="fa fa-user-times"></i> Logoff
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link nav-link-bebride" href="/register">
                      <i class="fa fa-user-plus"></i> Registrar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      <i class="fa fa-user"></i> Login
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="tooltip"
                      title=""
                      data-placement="bottom"
                      href="https://www.facebook.com/bebridecasamentos"
                      data-original-title="Siga-nos no Facebook"
                    >
                      <i className="fa fa-facebook-square text-white"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      rel="tooltip"
                      title=""
                      data-placement="bottom"
                      href="https://www.instagram.com/bebridecasamentos"
                      data-original-title="Siga-nos no Instagram"
                    >
                      <i className="fa fa-instagram text-white"></i>
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
