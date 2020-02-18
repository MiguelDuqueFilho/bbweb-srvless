import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoff } from "../../auth/AuthAction";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { name, email } = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/#">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(Página atual)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      // <div className="navbar-custom-menu">
      //   <ul className="nav navbar-nav">
      //     <li
      //       onMouseLeave={() => this.changeOpen()}
      //       className={`dropdown user user-menu ${
      //         this.state.open ? "open" : ""
      //       }`}
      //     >
      //       <a
      //         href
      //         onClick={() => this.changeOpen()}
      //         aria-expanded={this.state.open ? "true" : "false"}
      //         className="dropdown-toggle"
      //         data-toggle="dropdown"
      //       >
      //         <img
      //           src="http://lorempixel.com/160/160/abstract"
      //           className="user-image"
      //           alt="User"
      //         />
      //         <span className="hidden-xs">{name}</span>
      //       </a>
      //       <ul className="dropdown-menu">
      //         <li className="user-header">
      //           <img
      //             src="http://lorempixel.com/160/160/abstract"
      //             className="img-circle"
      //             alt="User"
      //           />
      //           <p>
      //             {name}
      //             <small>{email}</small>
      //           </p>
      //         </li>
      //         <li className="user-footer">
      //           <div className="pull-right">
      //             <a
      //               href
      //               onClick={this.props.logoff}
      //               className="btn btn-default btn-flat"
      //             >
      //               Sair
      //             </a>
      //           </div>
      //         </li>
      //       </ul>
      //     </li>
      //   </ul>
      // </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logoff }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
