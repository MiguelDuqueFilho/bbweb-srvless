import React, { Component } from "react";
import "./Depositions.css";
import Grid from "../component/Grid/Grid";
import Banner from "../assets/img/banner-inicial-4.png";

export default class Depositions extends Component {
  render() {
    return (
      <div className="section text-center">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title">Depoimentos</h2>
          </div>
        </div>
        <div className="top-content">
          <div className="container-fluid">
            <div className="carrousel slide">
              <div className="carrousel-inner">
                <Grid cols="3 3 3 3 3" className="carrousel-item">
                  {/* <div className="carrousel-item col-3"> */}
                  <div className="card mb-2">
                    <img src={Banner} alt="img1" className="car-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Fulano e Ciclano
                      </h4>
                      <p className="card-text">Maravilhoso</p>
                    </div>
                  </div>
                  {/* </div> */}
                </Grid>
                <div className="carrousel-item col-3">
                  <div className="card mb-2">
                    <img src={Banner} alt="img1" className="car-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Amélia e Francisco
                      </h4>
                      <p className="card-text">Adorei a tudo</p>
                    </div>
                  </div>
                </div>
                <div className="carrousel-item  col-3">
                  <div className="card  mb-2">
                    <img src={Banner} alt="img1" className="car-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">Casamento de Maria e João</h4>
                      <p className="card-text">Superou minhas expectativas</p>
                    </div>
                  </div>
                </div>
                <div className="carrousel-item  col-3">
                  <div className="card mb-2">
                    <img src={Banner} alt="img1" className="car-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Maria e Marisa
                      </h4>
                      <p className="card-text">Melhor impossível</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
