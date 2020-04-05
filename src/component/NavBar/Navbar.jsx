import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../../auth/AuthAction";
import { toggleChanged } from "../../main/mainAction";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, toggle: props.toggle };
    this.toggleChanged = this.toggleChanged.bind(this);
    this.changeOpen = this.changeOpen.bind(this);
    this.logoff = this.logoff.bind(this);

    // this.onSubmit = this.onSubmit.bind(this);
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  logoff() {
    this.props.logout();
  }

  // onSubmit(values) {
  //   console.log(values); // para pesquisa
  // }

  async toggleChanged() {
    await this.setState({ toggle: !this.state.toggle });
    await this.props.toggleChanged(this.state.toggle);
  }

  render() {
    const { name } = this.props.user;

    const { handleSubmit } = this.props || [];
    return (
      <div className="navbar-custom-menu">
        <form
          className="navbar-form "
          onSubmit={handleSubmit(values => this.onSubmit(values))}
        >
          <span className="bmd-form-group">
            <div className="input-group no-border">
              <Field
                className="form-control"
                component="input"
                type="text"
                name="search"
                placeholder="Pesquisa..."
              />

              <button
                type="submit"
                className="btn btn-white btn-round btn-just-icon "
              >
                <i className="fa fa-search "></i>
              </button>
            </div>
          </span>
        </form>
        <ul className="navbar-nav-custom">
          <li className="nav-item-custom">
            <Link className="nav-link-custom text-decoration-none" to="/admin">
              <i className="fa fa-bar-chart"></i>
            </Link>
          </li>
          <li className="nav-item-custom dropdown">
            <i onClick={this.changeOpen} className="fa fa-user mr-5">
              {" "}
              {name}
            </i>

            <div className="dropdown-menu-custom">
              <div
                className={`dropdown-menu dropdown-with-icons ${
                  this.state.open ? "show" : ""
                }`}
              >
                <a href="/#" className={`dropdown-item `}>
                  <i className={`fa fa-user`}>
                    <span className="ml-3">Profile</span>
                  </i>
                </a>
                <div className={`dropdown-item `}>
                  <Link
                    className="nav-link-custom text-decoration-none"
                    to="/password"
                  >
                    <i className="fa fa-lock ">
                      <span className="ml-3">Troca senha</span>
                    </i>
                  </Link>
                </div>
                <div className={`dropdown-item `}>
                  <i onClick={this.logoff} className={`fa fa-user-times `}>
                    <span className="ml-2">Sair</span>
                  </i>
                </div>
              </div>
            </div>
          </li>
          <li
            className="nav-item-custom nav-toggle ml-5"
            onClick={this.toggleChanged}
          >
            <i
              className={`fa ${this.state.toggle ? "fa-times" : "fa-bars"} `}
            ></i>
          </li>
        </ul>
      </div>
    );
  }
}

Navbar = reduxForm({
  form: "Navbar",
  destroyOnUnmount: false
})(Navbar);

const mapStateToProps = state => ({
  user: state.auth.user,
  toggle: state.app.toggle
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout, toggleChanged }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
