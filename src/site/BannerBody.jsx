import React, { Component } from "react";
import { Parallax } from "react-parallax";

import "./BannerBody.css";
import Banner from "../assets/img/banner-inicial-4.png";

export default class BannerBody extends Component {
  render() {
    return (
      <Parallax
        bgImage={Banner}
        bgImageAlt="Banner"
        bgImageStyle={{ height: 1400 }}
        bgClassName="banner-parallax"
        strength={500}
      >
        <div className="banner-body">
          <div className="row">
            <div className="col-12 ml-auto mr-auto ">
              <div className="title">
                <h1>BeBride</h1>
                <h4>Venha conversar com a gente.</h4>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}
