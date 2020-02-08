import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
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
                    <div className="authbuttons">
                      <button className="btn btn-primary" type="submit">
                        {loginMode ? "Entrar" : "Registrar"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={pristine || submitting}
                        onClick={reset}
                      >
                        Limpar
                      </button>
                    </div>
                  </div>
                </form>
                {/* <hr /> */}
                <a
                  className="d-flex mt-3 pr-4 justify-content-end text-dark"
                  href="/#"
                >
                  <i className="fa fa-user"></i>
                  <h6 className="ml-3">Esqueci minha senha</h6>
                </a>
                <hr />
                <div>
                  <a
                    href="/#"
                    className="d-flex justify-content-center text-primary"
                    // className="btn btn-primary "
                    onClick={() => this.changeMode()}
                  >
                    {loginMode
                      ? "Novo Usuário? click aqui!"
                      : "Já é cadastrado? click aqui!"}
                  </a>
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
