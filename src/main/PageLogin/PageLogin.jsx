import React, { useState, useEffect } from "react";

import "./PageLogin.css";
import api from "../../services/api";
import FormLogin from "../../component/FormLogin/FormLoginc";
// import logo from "../../assets/img/logo-01-45x45.png";

export default function PageLogin() {
  const [userLogado, setUserLogado] = useState([]);

  useEffect(() => {}, []);

  async function handleLogin(values) {
    const response = await api.post("/login", values);

    if (response.data.status === true) {
      setUserLogado(response.data.data);
      console.log(userLogado);
    }
  }

  return (
    <div className="page-header">
      <div className="container">
        <div className="card card-login">
          <FormLogin onSubmit={handleLogin} />
          {/* <form action="#" method="post">
            <div className="card-header">
              <h4 className="card-title">
                <strong>Login</strong>
              </h4>
              <div className="login-image">
                <img className="img-logo" src={logo} alt="logo Bebride" />
              </div>
              <p className="description">Clientes</p>
            </div>
            <div className="card-body">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="material-icons">face</i>
                </span>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
