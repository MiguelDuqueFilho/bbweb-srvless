import React, { Component } from "react";
import "./Team.css";
import { urls } from "../services/utils";
import Grid from "../component/Grid/Grid";

export default class Team extends Component {
  render() {
    return (
      <div className="section text-center">
        <h2 className="title">Aqui está nosso time</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-6">
              <div className="team-player">
                <div className="card card-plain">
                  <Grid cols="10 9 8 7 6" className=" ml-auto mr-auto m-2">
                    <img
                      src={`${urls.BASE_URL}/teams/bruna/img`}
                      alt="Bruna"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </Grid>
                  <div className="card-title mt-3">Bruna Duque</div>
                  <small className="card-description ">Publicitária</small>
                  <div className="card-footer justify-content-center bg-white ">
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a
                      href="https://instagram.com/bruduque_?igshid=1r3q8i736iuu"
                      className="btn btn-link btn-just-icon"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-player">
                <div className="card card-plain">
                  <Grid cols="10 9 8 7 6" className=" ml-auto mr-auto m-2">
                    <img
                      src={`${urls.BASE_URL}/teams/tamires/img`}
                      alt="Tamires"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </Grid>
                  <div className="card-title mt-3">Tamires</div>
                  <small className="card-description text-muted">
                    Assessoria
                  </small>
                  <div className="card-footer justify-content-center bg-white ">
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-instagram"></i>
                    </a>
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
