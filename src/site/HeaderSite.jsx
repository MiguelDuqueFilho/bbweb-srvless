import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  FaBars,
  FaTimes,
  // FaHome,
  FaFacebookSquare,
  FaInstagram,
  // FaUserFriends,
  // FaUserCheck,
  // FaUserTimes,
  // FaRegIdCard,
  FaWhatsapp,
} from 'react-icons/fa';

import './HeaderSite.css';
// import If from '../common/operator/if';
import { getModelTypes } from '../services/utils';

// import { logout } from '../auth/AuthAction';
import Logo from '../component/Logo/Logo';

class HeaderSite extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.dropdownNavbar = this.dropdownNavbar.bind(this);
    // this.logoff = this.logoff.bind(this);
    this.state = {
      navClassName: 'navbar-transparent',
      collapsed: true,
      dropdown: false,
    };
  }

  // logoff() {
  //   this.props.logout();
  // }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  dropdownNavbar() {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 100) {
      this.setState({
        navClassName: 'navbar-color-on-scroll',
      });
    } else {
      this.setState({
        navClassName: 'navbar-transparent ',
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  componentWillUnmount() {
    window.onscroll = () => {};
  }

  renderRows() {
    const types = getModelTypes();
    return types.map((typ) => (
      <Link
        key={typ.id}
        to={typ.url}
        onClick={this.dropdownNavbar}
        className={`dropdown-item ${this.state.navClassName}`}
      >
        <i className={`fa fa-${typ.icon} mr-2`}></i> {typ.title}
      </Link>
    ));
  }

  render() {
    // const { validToken, user } = this.props.auth;
    // const type = user ? user.type : 0;
    // const name = user ? user.name : '';
    const celular_bebride = '5511940768615';
    const text = 'Olá Be Bride, Tenho interesse em receber informações';
    const textEncode = encodeURIComponent(text);

    let urlWhatsapp = `https://wa.me/${celular_bebride}?text=${textEncode}`;

    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse mt-4 show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right ';

    // const dropdown = this.state.dropdown;
    // const classDropdown = dropdown
    //   ? 'dropdown-menu dropdown-with-icons show'
    //   : 'dropdown-menu dropdown-with-icons';

    return (
      <div className='page-header-site'>
        <div className='container'>
          <nav
            className={`navbar  fixed-top navbar-expand-lg ${this.state.navClassName}`}
            id='sectionsNav'
          >
            <div className='container-fluid '>
              <div className='navbar-translate d-flex '>
                <Logo navClassName={`${this.state.navClassName}`} />
              </div>
              <div>
                <button
                  onClick={this.toggleNavbar}
                  className={`${classTwo}`}
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarResponsive'
                  aria-controls='navbarResponsive'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  {this.state.collapsed ? (
                    <FaBars className='icon' />
                  ) : (
                    <FaTimes className='icon' />
                  )}
                </button>
              </div>
              <div className={`${classOne}`} id='navbarResponsive'>
                <ul className='navbar-nav ml-auto mr-auto col-12 justify-content-end'>
                  {/* <li className='nav-item level-1'>
                    <Link className='nav-link text-decoration-none' to='/'>
                      <FaHome className='react-icons mr-2' />
                      Home
                    </Link>
                  </li> */}
                  {/* <li className='dropdown nav-item level-1'>
                    <span
                      onClick={this.dropdownNavbar}
                      className='dropdown-toggle nav-link mr-10'
                      data-toggle='dropdown'
                    >
                      <GiCutDiamond className='react-icons mr-2' />
                      Planos
                    </span>
                    <div>
                      <div className={classDropdown}>
                        {this.renderRows(classDropdown)}
                      </div>
                    </div>
                  </li> */}
                  {/* <If test={validToken}>
                    <li className='nav-item level-1'>
                      <Link
                        className='nav-link text-decoration-none'
                        to={userTypeContent(type).href}
                      >
                        <FaRegIdCard className='react-icons mr-2' />
                        {userTypeContent(type).name}
                      </Link>
                    </li>
                  </If>
                  <If test={validToken}>
                     <li className="nav-item level-1">
                      <Link
                        className="nav-link text-decoration-none"
                        to="/login"
                      >
                        <FaUserCheck className="react-icons mr-2" />
                        {validToken ? name : ""}
                      </Link>
                    </li>
                    <li className="nav-item level-1">
                      <span
                        onClick={this.logoff}
                        className="nav-link text-decoration-none"
                      >
                        <FaUserTimes className="react-icons mr-2" />
                        Logoff
                      </span>
                    </li>
                  </If>
                  <If test={!validToken}>
                    <li className="nav-item level-1">
                      <Link
                        className="nav-link text-decoration-none"
                        to="/login"
                      >
                        <FaUserFriends className="react-icons mr-2" />
                        Login / Registrar
                      </Link>
                    </li>
                  </If> */}
                  <li className='nav-item level-1'>
                    <a
                      className='nav-link'
                      rel='tooltip'
                      title='Contate via Whatsapp'
                      data-placement='bottom'
                      href={urlWhatsapp}
                    >
                      <FaWhatsapp className='react-icons mr-2' />
                    </a>
                  </li>
                  <li className='nav-item level-1'>
                    <a
                      className='nav-link'
                      rel='tooltip'
                      title='Siga-nos no Facebook'
                      data-placement='bottom'
                      href='https://www.facebook.com/bebridecasamentos'
                    >
                      <FaFacebookSquare className='react-icons mr-2' />
                    </a>
                  </li>
                  <li className='nav-item level-1'>
                    <a
                      className='nav-link'
                      rel='tooltip'
                      title='Siga-nos no Instagram'
                      data-placement='bottom'
                      href='https://www.instagram.com/bebridecasamentos'
                    >
                      <FaInstagram className='react-icons mr-2' />
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

export default HeaderSite;
