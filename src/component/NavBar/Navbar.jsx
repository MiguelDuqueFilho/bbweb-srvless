import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../../auth/AuthAction";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
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
    console.log(values);
  }

  render() {
    // const { name } = this.props.user;

    const { handleSubmit } = this.props || [];
    return (
      <div className="navbar-custom-menu">
        <form
          className="navbar-form"
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
                className="btn btn-white btn-round btn-just-icon"
              >
                <i className="fa fa-search"></i>
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
          <li className="nav-item-custom">
            <Link className="nav-link-custom text-decoration-none" to="/admin">
              <i className="fa fa-user"></i>
            </Link>

            {/* <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownProfile"
            >
              <a className="dropdown-item" href="/admin/users/profile">
                Profile
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/logout">
                Log out
              </a>
            </div> */}
          </li>
          <li className="nav-item-custom nav-toggle">
            <i className="fa fa-bars"></i>
          </li>
        </ul>
      </div>

      //   <div className="navbar-custom-menu">
      //     <ul className="nav navbar-nav">
      //       <li
      //         onMouseLeave={() => this.changeOpen()}
      //         className={`dropdown user user-menu ${
      //           this.state.open ? "open" : ""
      //         }`}
      //       >
      //         <button
      //           onClick={() => this.changeOpen()}
      //           aria-expanded={this.state.open ? "true" : "false"}
      //           className="dropdown-toggle"
      //           data-toggle="dropdown"
      //         >
      //           <span className="hidden-xs">{name}</span>
      //         </button>
      //         <ul className="dropdown-menu">
      //           <li className="user-header">
      //             <p>
      //               {name}

      //             </p>
      //           </li>
      //           <li className="user-footer">
      //             <div className="pull-right">
      //               <button
      //                 onClick={this.logoff}
      //                 className="btn btn-default btn-flat"
      //               >
      //                 Sair
      //               </button>
      //             </div>
      //           </li>
      //         </ul>
      //       </li>
      //     </ul>
      //   </div>
    );
  }
}

Navbar = reduxForm({
  form: "Navbar",
  destroyOnUnmount: false
})(Navbar);

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
