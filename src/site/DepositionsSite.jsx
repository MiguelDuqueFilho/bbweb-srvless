import React, { Component } from "react";
import "./DepositionsSite.css";
import { urls } from "../services/utils";
import Grid from "../component/Grid/Grid";
// import Banner from "../assets/img/banner-inicial-4.png";

export default class DepositionsSite extends Component {
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
              <div className="carrousel-inner flex-wrap">
                <Grid cols="10 10 6 4 3" className="carrousel-item">
                  <div className="card mb-5">
                    <img
                      src={`${urls.BASE_URL}/deposition/1/img`}
                      alt="deposition_1"
                      className="car-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Fulano e Ciclano
                      </h4>
                      <p className="card-text">Maravilhoso</p>
                    </div>
                  </div>
                </Grid>
                <Grid cols="10 10 6 4 3" className="carrousel-item">
                  <div className="card mb-5">
                    <img
                      src={`${urls.BASE_URL}/deposition/2/img`}
                      alt="deposition_2"
                      className="car-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Amélia e Francisco
                      </h4>
                      <p className="card-text">Adorei a tudo</p>
                    </div>
                  </div>
                </Grid>
                <Grid cols="10 10 6 4 3" className="carrousel-item">
                  <div className="card  mb-5">
                    <img
                      src={`${urls.BASE_URL}/deposition/3/img`}
                      alt="deposition_3"
                      className="car-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Casamento de Maria e João</h4>
                      <p className="card-text">Superou minhas expectativas</p>
                    </div>
                  </div>
                </Grid>
                <Grid cols="10 10 6 4 3" className="carrousel-item">
                  <div className="card mb-5">
                    <img
                      src={`${urls.BASE_URL}/deposition/4/img`}
                      alt="deposition_4"
                      className="car-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        Casamento de Maria e Marisa
                      </h4>
                      <p className="card-text">Melhor impossível</p>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
