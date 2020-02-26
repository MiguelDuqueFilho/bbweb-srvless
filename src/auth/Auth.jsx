import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "./Auth.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../assets/img/logo45-01.png";
import { login, signup, forgot } from "./AuthAction";
import InputIcon from "../common/form/InputIcon";
import { required, email } from "./AuthValidate";
import Messages from "../common/Messages/Messages";
import Row from "../common/row";
import Grid from "../component/Grid/Grid";
import Footer from "../component/Footer/Footer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true, forgotMode: false };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode, forgotMode: false });
  }

  changeForgot() {
    this.setState({
      loginMode: this.state.loginMode,
      forgotMode: !this.state.forgotMode
    });
  }

  onSubmit(values) {
    const { login, signup, forgot } = this.props;

    if (this.state.forgotMode) {
      forgot(values);
    } else {
      this.state.loginMode ? login(values) : signup(values);
    }
  }

  render() {
    const { loginMode, forgotMode } = this.state;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <>
        <div className="page-header">
          <div className="container">
            <Row>
              <Grid cols="11 9 7 5 5" className="ml-auto mr-auto">
                <div className="card card-login">
                  <form
                    onSubmit={handleSubmit(values => this.onSubmit(values))}
                  >
                    <div className="card-header card-header-primary text-center">
                      <h4 className="card-title">
                        {loginMode
                          ? forgotMode
                            ? "Recuperar senha"
                            : "Login"
                          : "Cadastro"}
                      </h4>
                      <div className="logo-image">
                        <img
                          src={logo}
                          alt="logo"
                          className="img-raised rounded-circle img-fluid align-top "
                        />
                      </div>
                    </div>
                    <p className="description text-center">Cliente</p>
                    <div className="card-body ">
                      <div className="input-group ">
                        <div className="input-block">
                          <Field
                            component={InputIcon}
                            type="input"
                            name="userName"
                            placeholder="Nome"
                            icon="user"
                            hidden={
                              loginMode ? (forgotMode ? true : true) : false
                            }
                          />
                          <Field
                            component={InputIcon}
                            type="input"
                            name="userEmail"
                            placeholder="Email..."
                            icon="envelope"
                            validate={[email, required]}
                          />
                          <Field
                            component={InputIcon}
                            type="password"
                            name="password"
                            placeholder="Senha..."
                            icon="lock"
                            // validate={required}
                            hidden={forgotMode}
                          />
                          <Field
                            component={InputIcon}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar Senha"
                            icon="lock"
                            hidden={
                              loginMode ? (forgotMode ? true : true) : false
                            }
                          />
                          <br />
                          <Row className="text-center">
                            <Grid cols="6">
                              <button
                                className="btn btn-primary btn-flat "
                                type="submit"
                                disabled={submitting}
                              >
                                {loginMode
                                  ? forgotMode
                                    ? "Enviar"
                                    : "Entrar"
                                  : "Registrar"}
                              </button>
                            </Grid>
                            <Grid cols="6">
                              <button
                                type="button"
                                className="btn btn-primary "
                                disabled={pristine || submitting}
                                onClick={reset}
                              >
                                Limpar
                              </button>
                            </Grid>
                          </Row>
                        </div>
                      </div>
                      <Row className="text-right text-reset mr-3">
                        <Grid cols="12">
                          <i
                            className={`${loginMode ? "btn" : "d-none"}`}
                            onClick={() => this.changeForgot()}
                          >
                            <span className="login-forgot text-capitalize text-nowrap font-weight-lighter">
                              {forgotMode
                                ? "Fazer login"
                                : "Esqueci minha senha? click aqui!"}
                            </span>
                          </i>
                        </Grid>

                        <Grid cols="12">
                          <i
                            className="btn mb-2"
                            onClick={() => this.changeMode()}
                          >
                            <span className="login-newuser text-right text-capitalize text-nowrap font-weight-lighter">
                              {loginMode
                                ? "Novo usuário? Registrar aqui!"
                                : "Já é cadastrado? Entrar aqui!"}
                            </span>
                          </i>
                        </Grid>
                      </Row>
                    </div>
                  </form>
                </div>
              </Grid>
            </Row>
            <Messages />
          </div>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </>
    );
  }
}

Auth = reduxForm({
  form: "authForm"
})(Auth);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, signup, forgot }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
