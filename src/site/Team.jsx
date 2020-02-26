import React, { Component } from "react";
import "./Team.css";
import bruna from "../assets/img/avatar_bruna.png";
import tamires from "../assets/img/avatar_tamires.png";

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
                  <div className="col-6 ml-auto mr-auto m-2">
                    <img
                      src={bruna}
                      alt="Bruna"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div className="card-title">Bruna Duque</div>
                  <small className="card-description ">Publicitária</small>
                  <div className="card-footer justify-content-center bg-white ">
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-6 ml-auto mr-auto m-2">
                    <img
                      src={tamires}
                      alt="Tamires"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div className="card-title">Tamires</div>
                  <small className="card-description text-muted">
                    Assessoria
                  </small>
                  <div className="card-footer justify-content-center bg-white ">
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="/#" className="btn btn-link btn-just-icon">
                      <i className="fa fa-facebook-square"></i>
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
