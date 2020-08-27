import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import '../global.css';
import './BannerBody.css';

export default class BannerBody extends Component {
  render() {
    return (
      <Parallax bgImage={this.props.banner} bgImageAlt='Banner' strength={200}>
        <div className='banner-body'>
          <div className='row'>
            <div className='col-12 '>
              <p className='title'>{this.props.title}</p>
              <p className='subtitle'>{this.props.subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}
