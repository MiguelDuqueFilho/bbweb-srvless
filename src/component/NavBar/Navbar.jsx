import React, { Component, dispatch } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../../auth/AuthAction";
import { setSearchHeader } from "../../main/mainAction";
import { FaSearch, FaTimes } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, toggle: props.toggle };
    this.changeOpen = this.changeOpen.bind(this);
    this.logoff = this.logoff.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  logoff() {
    this.props.logout();
  }

  onSubmit(values) {
    this.props.setSearchHeader(values);
  }

  onReset() {
    this.props.clearSearchHeader();
    dispatch(reset("Navbar"));
  }

  render() {
    const { name } = this.props.user;

    const { handleSubmit, reset } = this.props || [];
    return (
      <div className="navbar-custom-menu">
        <form
          className="navbar-form "
          onSubmit={handleSubmit((values) => this.onSubmit(values))}
        >
          <span className="form-group">
            <div className="input-group search">
              <Field
                className="form-control "
                component="input"
                type="text"
                name="search"
                placeholder="Pesquisa..."
              />
              <span
                onClick={() => {
                  reset();
                  this.onSubmit();
                }}
              >
                <FaTimes size={18} />
              </span>
              <button
                type="submit"
                className="btn btn-white btn-round btn-just-icon mr-3 text-decoration-none"
              >
                <FaSearch size={18} className="mb-1" />
              </button>
            </div>
          </span>
        </form>
        <ul className="navbar-nav-custom">
          <li className="nav-item-custom nav-item-small-none">
            <Link className="nav-link-custom text-decoration-none" to="/admin">
              <i className="fa fa-bar-chart"></i>
            </Link>
          </li>
          <li className="nav-item-custom dropdown mr-5">
            <i onClick={this.changeOpen} className="fa fa-user ">
              <span className="nav-item-small-none ml-2">{name}</span>
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
        </ul>
      </div>
    );
  }
}

Navbar = reduxForm({
  form: "Navbar",
  destroyOnUnmount: false,
})(Navbar);

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout, setSearchHeader }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
