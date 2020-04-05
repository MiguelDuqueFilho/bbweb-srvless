import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "./Auth.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import logo from "../assets/img/logo45-01.png";
import { changePassword } from "./AuthAction";
import { required } from "./AuthValidate";
import InputIcon from "../common/form/InputIcon";
import Messages from "../common/Messages/Messages";
import Row from "../common/row";
import Grid from "../component/Grid/Grid";
import Footer from "../component/Footer/Footer";
import HeaderSite from "../site/HeaderSite";

class AuthPassword extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { id } = this.props.auth.user || "";
    if (id !== "") {
      values = { ...values, id };
      this.props.changePassword(values, this.props.history);
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { name } = this.props.auth.user || "";
    return (
      <React.Fragment>
        <HeaderSite />
        <div className="page-header">
          <div className="container">
            <Row>
              <Grid cols="11 9 7 5 5" className="ml-auto mr-auto">
                <div className="card card-login">
                  <form
                    onSubmit={handleSubmit(values => this.onSubmit(values))}
                  >
                    <div className="card-header card-header-primary text-center">
                      <h4 className="card-title">Troca de Senha</h4>
                      <div className="logo-image">
                        <img
                          src={logo}
                          alt="logo"
                          className="img-raised rounded-circle img-fluid align-top "
                        />
                      </div>
                    </div>
                    <p className="description text-center">
                      {name ? name : "Cliente"}
                    </p>
                    <div className="card-body ">
                      <div className="input-group ">
                        <div className="input-block">
                          <Field
                            component={InputIcon}
                            type="password"
                            name="password"
                            placeholder="Senha..."
                            icon="lock"
                            validate={required}
                          />
                          <Field
                            component={InputIcon}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar Senha"
                            icon="lock"
                            validate={required}
                          />
                          <br />
                          <Row className="text-center">
                            <Grid cols="6">
                              <button
                                className="btn btn-primary btn-flat "
                                type="submit"
                                disabled={submitting}
                              >
                                Enviar
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
      </React.Fragment>
    );
    // }
  }
}

AuthPassword = reduxForm({
  form: "AuthRecoveryForm"
})(AuthPassword);

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePassword }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthPassword);
