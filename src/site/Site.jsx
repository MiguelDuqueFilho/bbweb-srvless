import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Site.css';

import HeaderSite from './HeaderSite';
import BannerBody from './BannerBody';
import Plans from './Plans';
import DepositionsSite from './DepositionsSite';
import Team from './Team';
import Final from './Final';

import Why from './Why';

import FooterSite from './FooterSite';

import banner from '../assets/img/banner.png';

class Site extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody title='Vamos juntas?' subtitle='' banner={banner} />
        <div className='main main-raised'>
          <Team />
          <Why />
          <Plans />
          <DepositionsSite />
          <Final />
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, site: state.site });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, null)(Site);
