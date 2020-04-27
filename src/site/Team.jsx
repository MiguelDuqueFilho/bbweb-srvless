import React, { Component } from "react";
import "./Team.css";
import { urls } from "../services/utils";
import Grid from "../component/Grid/Grid";

export default class Team extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">Aqui está nosso time</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-6">
              <div className="team-player">
                <div className="card ">
                  <Grid
                    cols="9 9 8 7 6"
                    className="card-plain ml-auto mr-auto mb-xl-3"
                  >
                    <img
                      src={`${urls.BASE_URL}/images/teams/avatar_bruna.png`}
                      alt="Bruna"
                      className="img-raised rounded-circle img-fluid"
                    />
                    <div className="card-title text-center mt-3">
                      Bruna Duque
                    </div>
                    <div className="card-subtitle text-center">
                      Publicitária
                    </div>
                    <div className="card-footer">
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
                  </Grid>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-player">
                <div className="card ">
                  <Grid
                    cols="9 9 8 7 6"
                    className="card-plain ml-auto mr-auto m-2"
                  >
                    <img
                      src={`${urls.BASE_URL}/images/teams/avatar_tamires.png`}
                      alt="Tamires"
                      className="img-raised rounded-circle img-fluid"
                    />
                    <div className="card-title text-center mt-3">Tamires</div>
                    <div className="card-subtitle text-center">Assessoria</div>
                    <div className="card-footer ">
                      <a href="/#" className="btn btn-link btn-just-icon">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a href="/#" className="btn btn-link btn-just-icon">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
