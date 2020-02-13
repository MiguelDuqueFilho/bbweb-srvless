import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class EventForm extends Component {
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
                <div className="form-row">
                  <Field
                    component="input"
                    type="input"
                    name="id"
                    hidden={true}
                  />
                  <div className="col-sm-8  form-group">
                    <label htmlFor="eventName">Nome</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="input"
                      name="eventName"
                      placeholder="Entre o nome"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <label htmlFor="eventDescription">Descrição</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="input"
                      name="eventDescription"
                      placeholder="Entre a descrição"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 col-sm-12 col-md-4 form-group">
                    <label htmlFor="eventStart">Data Inicio</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="Date"
                      name="eventStart"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 form-group">
                    <label htmlFor="eventDate">Data Evento</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="Date"
                      name="eventDate"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 form-group">
                    <label htmlFor="eventFinish">Data Fim</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="Date"
                      name="eventFinish"
                    />
                  </div>
                </div>

                {/* <Field component="input" type="select" name="eventTypeId" />
                  <Field component="input" type="select" name="eventStatusId" /> */}
                <div className="d-flex flex-wrap justify-content-between">
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

EventForm = reduxForm({
  form: "EventForm"
})(EventForm);

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(null, mapDispatchToProps)(EventForm);
