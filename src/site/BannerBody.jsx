import React, { Component } from "react";
import { Parallax } from "react-parallax";

import "./BannerBody.css";

export default class BannerBody extends Component {
  render() {
    return (
      <Parallax
        bgImage={this.props.banner}
        bgImageAlt="Banner"
        bgImageStyle={{ height: 1400 }}
        bgClassName="banner-parallax"
        strength={500}
      >
        <div className="banner-body">
          <div className="row">
            <div className="col-12 ml-auto mr-auto ">
              <div className="title">
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}
