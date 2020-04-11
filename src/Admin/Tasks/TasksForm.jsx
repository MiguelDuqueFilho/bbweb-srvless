import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../../component/Grid/Grid";
import { init } from "./TasksAction";
import { minValue1 } from "../AdminValidate";

class TasksForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isEventOnly: false };
    this.backPage = this.backPage.bind(this);
    this.renderField = this.renderField.bind(this);
    this.renderSelectField = this.renderSelectField.bind(this);
    this.onDurationFieldChange = this.onDurationFieldChange.bind(this);
  }

  backPage() {
    this.props.init(this.props.listTasks.page, this.props.eventSelected);
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );

  renderSelectField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    children,
  }) => (
    <div>
      <select
        {...input}
        className="form-control"
        placeholder={label}
        type={type}
      >
        {children}
      </select>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );

  onDurationFieldChange = (event, newValue, previousValue, name) => {
    this.setState({ eventType: newValue === "0" ? true : false });
  };

  render() {
    const { handleSubmit, readOnly } = this.props;
    // console.log(this.props.eventSelected);
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
                  <div className="col-1 col-sm-1 col-md-1 form-group">
                    <label htmlFor="eventId"># Evento</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="eventId"
                      readOnly={true}
                    />
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 form-group">
                    <label htmlFor="Events[0]['eventName']">
                      Nome do Evento
                    </label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="Events[0]['eventName']"
                      readOnly={true}
                    />
                  </div>
                  <div className="col-sm-3 form-group">
                    <label htmlFor="taskSectionId">Seção</label>
                    <Field
                      className="form-control"
                      component={this.renderSelectField}
                      type="select"
                      name="taskSectionId"
                      readOnly={readOnly}
                      validate={minValue1}
                    >
                      <option defaultValue value="0">
                        Selecione uma opção
                      </option>
                      <option value="1">Tarefas do Sistema</option>
                      <option value="2">Pré Evento</option>
                      <option value="3">Dia da Noiva</option>
                      <option value="4">Dia do Evento</option>
                      <option value="5">Pós Evento</option>
                      <option value="6">Fechamento</option>
                    </Field>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-8 form-group">
                    <label htmlFor="taskName">Nome da tarefa</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="taskName"
                      placeholder="Entre o nome"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <Grid cols="12" className="form-group">
                    <label htmlFor="taskDescription">Descrição da tarefa</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="taskDescription"
                      placeholder="Entre a descrição"
                      readOnly={readOnly}
                    />
                  </Grid>
                </div>
                <div className="form-row">
                  <Grid cols="12 6 6 2 2" className="form-group">
                    <label htmlFor="taskDuration">Duração (dia)s</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="taskDuration"
                      readOnly={readOnly}
                      onChange={this.onDurationFieldChange}
                    />
                  </Grid>
                  <Grid cols="12 6 3 3 3" className="form-group">
                    <label htmlFor="taskStart">Data Inicio</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="date"
                      name="taskStart"
                      readOnly={readOnly}
                    />
                  </Grid>
                  <Grid
                    cols="12 6 3 1 1"
                    className="form-group"
                    hidden={!this.state.eventType}
                  >
                    <label htmlFor="taskTime">Hora</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="time"
                      name="taskTime"
                      readOnly={readOnly}
                    />
                  </Grid>
                  <Grid
                    cols="12 6 3 3 3"
                    className="form-group"
                    hidden={this.state.eventType}
                  >
                    <label htmlFor="taskFinish">Data Fim</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="date"
                      name="taskFinish"
                      readOnly={readOnly}
                    />
                  </Grid>

                  <Grid cols="12 6 3 2 2" className="form-group">
                    <label htmlFor="taskPredecessor">Predecessor</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="taskPredecessor"
                      readOnly={readOnly}
                    />
                  </Grid>
                  <Grid cols="12 6 3 2 2" className="form-group">
                    <label htmlFor="taskSuccessor">Sucessor</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="taskSuccessor"
                      readOnly={readOnly}
                    />
                  </Grid>
                </div>
                <div className="form-row">
                  <Grid cols="12 6 3 3 3" className="form-group">
                    <label htmlFor="taskStatusId">Status</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="taskStatusId"
                      readOnly={readOnly}
                    >
                      <option value="1">Inicial</option>
                      <option value="2">Em dia</option>
                      <option value="3">Alerta</option>
                      <option value="4">Atrasada</option>
                    </Field>
                  </Grid>
                  <Grid cols="12 6 3 3 3" className="form-group">
                    <label htmlFor="taskCompleted">% Concluída</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="taskCompleted"
                      readOnly={readOnly}
                    />
                  </Grid>
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
                    onClick={this.backPage}
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

TasksForm = reduxForm({
  form: "TasksForm",
  destroyOnUnmount: false,
})(TasksForm);

const selector = formValueSelector("TasksForm");

const mapStateToProps = (state) => ({
  listTasks: state.tasks.listTasks,
  taskDurationValue: selector(state, "taskDuration"),
  eventSelected: state.events.eventSelected,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);
