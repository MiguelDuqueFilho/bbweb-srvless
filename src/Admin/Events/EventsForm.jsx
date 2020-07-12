import React, { Component } from "react";
import path from "path";
import { reduxForm, Field, change, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init, initForm, fileUpdateSelectedImgEvt } from "./EventsAction";
import Modal from "../../component/Modal/Modal";
import UploadsSearch from "../Uploads/UploadsSearch";
import { urls } from "../../services/utils";

class EventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      search: { ...props.search },
      timestamp: new Date().getTime(),
    };
    this.backPage = this.backPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getFileUpload = this.getFileUpload.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search.eventSelected !== this.props.search.eventSelected) {
      this.setState({ search: { ...this.props.search } });
      this.props.initForm(this.props.search);
    }
    if (this.props.fileUploadSelectImg !== null) {
      const fileSelect =
        this.getFileUpload(this.props.fileUploadSelectImg) || [];
      const { dispatch } = this.props;
      dispatch(change("EventsForm", "eventFilename", this.props.valuefilePath));
      dispatch(change("EventsForm", "uploadId", fileSelect["0"].id));
      fileUpdateSelectedImgEvt(null);
    }
  }

  getFileUpload = (fileSelected) =>
    this.props.listUploadsImg.filter(
      (file) => parseInt(file.id) === parseInt(fileSelected)
    );

  backPage() {
    this.props.init(this.props.listEvents.page, this.props.search);
    this.props.fileUpdateSelectedImgEvt(null);
  }

  showModal = (event) => {
    event.preventDefault();
    this.setState({ show: true });
  };

  hideModal = (event) => {
    event.preventDefault();
    this.setState({ show: false });
  };

  closeModal = (event) => {
    this.setState({ show: false });
  };

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
                      <option value="0">Selecionar tipo</option>
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
                      <option value="0">Selecionar Status</option>
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
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <UploadsSearch closeModal={this.closeModal} type="imgEvt" />
                </Modal>
                <div className="form-row">
                  <div className="col-6 form-columns">
                    <div className="form-group">
                      <label htmlFor="uploadId">Id da imagem</label>
                      <Field
                        className="form-control"
                        component="input"
                        type="number"
                        name="uploadId"
                        readOnly={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="eventFilename">
                        Nome da imagem carregada
                      </label>
                      <Field
                        className="form-control"
                        component="input"
                        type="text"
                        name="eventFilename"
                        placeholder="Digite a descrição"
                        readOnly={true}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={this.showModal}
                    >
                      Pesquisa imagem
                    </button>
                  </div>
                  <div className="upload-image">
                    <img
                      src={`${
                        urls.BASE_URL
                      }${this.props.valuefilePath.trim().substring(3)}`}
                      alt={`event ${path.basename(this.props.valuefilePath)}`}
                    />
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

EventsForm = reduxForm({
  form: "EventsForm",
  destroyOnUnmount: false,
})(EventsForm);

const selector = formValueSelector("EventsForm");

EventsForm = connect((state) => {
  return {
    valuefilePath: selector(state, "eventFilename")
      ? selector(state, "eventFilename")
      : " ",
  };
})(EventsForm);

const mapStateToProps = (state) => ({
  listEvents: state.events.listEvents,
  listUploadsImg: state.uploads.listUploadsImg,
  fileUploadSelectImg: state.events.fileUploadSelectImg,
  search: state.app.search,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, initForm, fileUpdateSelectedImgEvt }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EventsForm);
