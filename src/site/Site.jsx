import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import "./Site.css";
import { Parallax } from "react-parallax";
import Banner from "../assets/img/banner-inicial-4.png";

import HeaderSite from "./HeaderSite";
import FooterSite from "./FooterSite";

class Site extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <>
        <Parallax
          bgImage={Banner}
          bgImageAlt="Banner"
          bgClassName="banner-parallax"
          strength={400}
        >
          <div className="banner-body">
            <div className="row">
              <div className="col-md-12 ml-auto mr-auto ">
                <div className="title">
                  <h1>BeBride</h1>
                  <h4>Venha conversar com a gente.</h4>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <HeaderSite />
        <div className="main mai-raised">
          <div className="container">
            <div className="section text-center">
              <div className="colmd-8 ml-auto mr-auto">
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h2 className="title">Nós cuidamos de tudo para você.</h2>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
                <h4 className="description">
                  Cada dia da organização deve ser <i>celebrados</i>.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <FooterSite />
      </>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
// const mapDispatchToProps = dispatch => bindActionCreators({ logoff }, dispatch);
export default connect(mapStateToProps, null)(Site);
