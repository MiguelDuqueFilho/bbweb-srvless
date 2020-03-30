import React, { Component } from "react";
import "./FooterSite.css";
import Footer from "../component/Footer/Footer";

export default class FooterSite extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-footer-site">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
