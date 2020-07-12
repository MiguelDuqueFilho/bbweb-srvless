import React, { Component } from "react";
import { reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { urls } from "../../services/utils";
import {
  init,
  initForm,
  fileUpdateSelectedImgDep,
} from "../Depositions/DepositionsAction";
import Modal from "../../component/Modal/Modal";
import UploadsSearch from "../Uploads/UploadsSearch";

class DepositionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, search: { ...props.search } };
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
      dispatch(
        change(
          "DepositionsForm",
          "depositionFilename",
          fileSelect["0"].filePath
        )
      );
      dispatch(change("DepositionsForm", "uploadId", fileSelect["0"].id));
    }
  }

  getFileUpload = (fileSelected) =>
    this.props.listUploadsImg.filter(
      (file) => parseInt(file.id) === parseInt(fileSelected)
    );

  backPage() {
    this.props.init(this.props.listDepositionsAll.page, this.props.search);
    this.props.fileUpdateSelectedImgDep(null);
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
                </div>
                <div className="form-row">
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

                  <div className="col-sm-8  form-group">
                    <label htmlFor="depositionTitle">Titulo</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="depositionTitle"
                      placeholder="Digite o Titulo"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <label htmlFor="depositionDescription">Descrição</label>
                    <Field
                      className="form-control"
                      component="textarea"
                      type="text"
                      name="depositionDescription"
                      placeholder="Digite a descrição"
                      readOnly={readOnly}
                    />
                  </div>
                </div>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <UploadsSearch closeModal={this.closeModal} type="imgDep" />
                </Modal>

                <div className="form-row">
                  <div className="col-3 col-sm-3 col-md-3 form-group">
                    <label htmlFor="uploadId">Id da imagem</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="uploadId"
                      readOnly={true}
                    />
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={this.showModal}
                    >
                      Pesquisa imagem
                    </button>
                  </div>
                  <div className="col-8 form-group">
                    <label htmlFor="depositionFilename">
                      Nome da imagem carregada
                    </label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="depositionFilename"
                      placeholder="Digite a descrição"
                      readOnly={true}
                    />
                  </div>
                  <div>
                    {/* <img
                      src={`${urls.BASE_URL}/images/depositions/deposition_${item.id}.jpeg?`}
                      alt="deposition"
                    /> */}
                  </div>

                  {/* <div className="col-9 col-sm-9 col-md-9 form-group">
                    <label htmlFor="depositionFilename">Nome da imagem</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="depositionFilename"
                      readOnly={true}
                    />
                  </div> */}
                </div>
                <div className="form-row">
                  <div className="col-8 col-sm-4 col-md-4  form-group">
                    <label htmlFor="depositionShow">Mostrar no site</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="depositionShow"
                      readOnly={readOnly}
                    >
                      <option defaultValue value={""}>
                        Selecione mostrar imagem
                      </option>
                      <option value={false}>Não</option>
                      <option value={true}>Sim</option>
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

DepositionsForm = reduxForm({
  form: "DepositionsForm",
  destroyOnUnmount: false,
})(DepositionsForm);

const mapStateToProps = (state) => ({
  listDepositionsAll: state.depositions.listDepositionsAll,
  listUploadsImg: state.uploads.listUploadsImg,
  fileUploadSelectImg: state.depositions.fileUploadSelectImg,
  search: state.app.search,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, initForm, fileUpdateSelectedImgDep }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DepositionsForm);
