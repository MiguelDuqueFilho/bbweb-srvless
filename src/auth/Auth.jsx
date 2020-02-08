import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
// import { Card } from "react-bootstrap";
import "./Auth.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../assets/img/logo-01-45x45.png";
import { login, signup } from "./AuthAction";
import Input from "../common/form/inputAuth";
import { required, email, aol } from "./AuthValidate";
import Messages from "../component/Messages/Messages";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }

  render() {
    const { loginMode } = this.state;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-9 ml-auto mr-auto">
              <div className="card card-login">
                <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
                  <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Login</h4>
                    <div className="logo-image">
                      <img
                        src={logo}
                        alt="logo"
                        className="img-raised rounded-circle img-fluid align-top "
                      />
                    </div>
                  </div>
                  <p className="description text-center">Usuário</p>
                  <div className="card-body ">
                    <div className="input-group ">
                      <div className="input-block">
                        <Field
                          component={Input}
                          type="input"
                          name="userName"
                          placeholder="Nome"
                          icon="user"
                          hidden={loginMode}
                        />
                        <Field
                          component={Input}
                          type="input"
                          name="userEmail"
                          placeholder="E-mail"
                          icon="envelope"
                          validate={[email, required]}
                          warn={aol}
                        />
                        <Field
                          component={Input}
                          type="password"
                          name="password"
                          placeholder="Senha"
                          icon="lock"
                          validate={required}
                        />
                        <Field
                          component={Input}
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirmar Senha"
                          icon="lock"
                          hidden={loginMode}
                        />
                      </div>
                    </div>
                    <div className="authbutons">
                      <div>
                        <button className="btn btn-primary" type="submit">
                          {loginMode ? "Entrar" : "Registrar"}
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn btn-secundary"
                          disabled={pristine || submitting}
                          onClick={reset}
                        >
                          Limpar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <a
                  className="nav-link text-right text-capitalize"
                  href="/forgot"
                >
                  {/* <i className="material-icons">face</i> */}
                  Esqueci minha senha
                </a>
                <div className="new-user text-center ">
                  <button
                    onClick={() => this.changeMode()}
                    className="btn btn-secundary"
                  >
                    {loginMode
                      ? "Novo Usuário? click aqui!"
                      : "Já é cadastrado? click aqui!"}
                  </button>
                </div>
              </div>
              <Messages />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Auth = reduxForm({
  form: "authForm"
})(Auth);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
