import React, { Component } from "react";
import "./Doubts.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Messages from "../common/Messages/Messages";
import { required, email } from "./doubtsValidate";

import { reduxForm, Field } from "redux-form";
import { sendemail } from "./SiteAction";
import InputIcon from "../common/form/InputIcon";

class Doubts extends Component {
  onSubmit(values) {
    const { sendemail } = this.props;
    sendemail(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="section text-center">
        <div className="col-md-7 ml-auto mr-auto">
          <h2 className="title">Dúvidas ou Sugestões</h2>
          <h5 className="description text-center">
            Escreva algumas linhas sobre Dúvidas ou Sugestões e entre em
            contato. Nós responderemos a você em algumas horas.
          </h5>
          <form
            className="contact-form"
            onSubmit={handleSubmit(values => this.onSubmit(values))}
          >
            <div className="row">
              <div className="col-md-9  ml-auto mr-auto">
                <div className="form-group bmd-form-group">
                  {/* <input type="text" name="client_name" className="form-control"> */}
                  <Field
                    component={InputIcon}
                    type="input"
                    name="userName"
                    placeholder="Nome..."
                    icon="user"
                    validate={required}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9  ml-auto mr-auto">
                <div className="form-group bmd-form-group">
                  <Field
                    component={InputIcon}
                    type="input"
                    name="userEmail"
                    placeholder="Email..."
                    icon="envelope"
                    validate={[email, required]}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9 ml-auto mr-auto">
                <div className="form-group text-left bmd-form-group">
                  <Field
                    className="form-control row={4}"
                    component="textarea"
                    type="textarea"
                    name="messageEmail"
                    placeholder="Mensagem..."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ml-auto mr-auto text-center">
                <button type="submit" className="btn btn-primary btn-raised">
                  Enviar mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
        <Messages />
      </div>
    );
  }
}

Doubts = reduxForm({ form: "doubtsForm" })(Doubts);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendemail }, dispatch);
export default connect(null, mapDispatchToProps)(Doubts);
