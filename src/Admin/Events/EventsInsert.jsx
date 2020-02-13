import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class EventInsert extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="row mb-4">
        <div className="col-sm-12 grid-margin">
          <div className="card h-100">
            <form onSubmit={handleSubmit}>
              <h4 className="p-3 bg-primary shadow text-white rounded-lg">
                Inclusão de Eventos
              </h4>
              <div className="card-body">
                <div className="input-block">
                  <Field
                    component="input"
                    type="input"
                    name="id"
                    hidden={true}
                  />
                  <Field
                    component="input"
                    type="input"
                    name="eventName"
                    placeholder="Nome do Evento"
                  />
                  <Field
                    component="input"
                    type="input"
                    name="eventDescription"
                    placeholder="Descrição do Evento"
                  />
                  <Field component="input" type="Date" name="eventStart" />
                  <Field component="input" type="Date" name="eventDate" />
                  <Field component="input" type="Date" name="eventFinish" />
                  <Field component="input" type="select" name="eventTypeId" />
                  <Field component="input" type="select" name="eventStatusId" />
                </div>

                <div className="authbuttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Incluir
                    {/* {loginMode
                                        ? forgotMode
                                            ? "Recuperar"
                                            : "Entrar"
                                        : "Registrar"} */}
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
          </div>
        </div>
      </div>
    );
  }
}

EventInsert = reduxForm({
  form: "EventInsert"
})(EventInsert);

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(null, mapDispatchToProps)(EventInsert);
