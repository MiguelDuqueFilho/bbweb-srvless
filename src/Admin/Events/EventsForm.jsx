import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./EventsAction";

class EventsForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              {this.props.title}
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-row">
                  <Field
                    component="input"
                    type="number"
                    name="id"
                    hidden={true}
                  />
                  <div className="col-sm-8  form-group">
                    <label htmlFor="eventName">Nome</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="eventName"
                      placeholder="Entre o nome"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <label htmlFor="eventDescription">Descrição</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="eventDescription"
                      placeholder="Entre a descrição"
                      readOnly={readOnly}
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
                      readOnly={readOnly}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 form-group">
                    <label htmlFor="eventDate">Data Evento</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="Date"
                      name="eventDate"
                      readOnly={readOnly}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 form-group">
                    <label htmlFor="eventFinish">Data Fim</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="Date"
                      name="eventFinish"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-6 col-sm-6 col-md-6  form-group">
                    <label htmlFor="eventTypeId">Tipo Evento</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="eventTypeId"
                      readOnly={readOnly}
                    >
                      <option value="1">Assessoria Completa</option>
                      <option value="2">Assessoria Final</option>
                      <option value="3">Assessoria Pedido de Casamento</option>
                      <option value="4">Consultoria</option>
                    </Field>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 form-group">
                    <label htmlFor="eventStatusId">Status Evento</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="eventStatusId"
                      readOnly={readOnly}
                    >
                      <option value="1">Inicial</option>
                      <option value="2">Aguardando Contrato</option>
                      <option value="3">Contratado</option>
                      <option value="4">Em Andamento</option>
                      <option value="5">Pendência</option>
                      <option value="6">Concluído</option>
                      <option value="7">Cancelado</option>
                    </Field>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-between mt-3">
                  <button
                    type="submit"
                    className={`btn btn-${this.props.submitClass}`}
                  >
                    {this.props.submitLabel}
                  </button>
                  <button
                    type="button"
                    className="btn btn-gray bg-light"
                    onClick={this.props.init}
                  >
                    Cancelar
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

EventsForm = reduxForm({
  form: "EventsForm",
  destroyOnUnmount: false
})(EventsForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(EventsForm);
