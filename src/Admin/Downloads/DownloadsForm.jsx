import React, { Component } from "react";
import { reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { init } from "../Downloads/DownloadsAction";
import { getPdf } from "../Uploads/UploadsAction";
import Modal from "../../component/Modal/Modal";
import UploadsSearch from "../Uploads/UploadsSearch";

class DownloadsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.backPage = this.backPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getFileUpload = this.getFileUpload.bind(this);
  }

  componentDidUpdate() {
    if (this.props.fileUploadSelected !== null) {
      const fileSelect =
        this.getFileUpload(this.props.fileUploadSelected) || [];
      const { dispatch } = this.props;
      dispatch(
        change("DownloadsForm", "downloadFilename", fileSelect["0"].fileName)
      );
      dispatch(change("DownloadsForm", "downloadUploadId", fileSelect["0"].id));
    }
  }

  getFileUpload = fileSelected =>
    this.props.listUploadsPdf.filter(
      file => parseInt(file.id) === parseInt(fileSelected)
    );

  backPage() {
    this.props.init(this.props.listDownloadsAll.page);
  }

  showModal = event => {
    event.preventDefault();
    this.setState({ show: true });
  };

  hideModal = event => {
    event.preventDefault();
    this.setState({ show: false });
  };

  render() {
    const { handleSubmit, readOnly } = this.props;

    // const fileSelect = this.getFileUpload(fileUploadSelected);
    // console.log(" fileSelect >>>>>>>>> render ");
    // console.log(fileSelect);
    // console.log(" fileSelect.fileName >>>>>>>>> render ");
    // console.log(fileSelect["0"].fileName);

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
                    <label htmlFor="downloadTitle">Titulo</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="downloadTitle"
                      placeholder="Digite o Titulo"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <label htmlFor="downloadDescription">Descrição</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="downloadDescription"
                      placeholder="Digite a descrição"
                      readOnly={readOnly}
                    />
                  </div>
                </div>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <UploadsSearch />
                </Modal>

                <div className="form-row">
                  <div className="col-3 col-sm-3 col-md-3 form-group">
                    <label htmlFor="downloadUploadId">Id do Upload</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="number"
                      name="downloadUploadId"
                      readOnly={true}
                    />
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={this.showModal}
                    >
                      Pesquisa Arquivos
                    </button>
                  </div>
                  <div className="col-9 col-sm-9 col-md-9 form-group">
                    <label htmlFor="downloadFilename">Nome do arquivo</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="downloadFilename"
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-8 col-sm-4 col-md-4  form-group">
                    <label htmlFor="downloadShow">Mostrar no site</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="downloadShow"
                      readOnly={readOnly}
                    >
                      <option defaultValue value={false}>
                        Não
                      </option>
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

DownloadsForm = reduxForm({
  form: "DownloadsForm",
  destroyOnUnmount: false
})(DownloadsForm);

const mapStateToProps = state => ({
  listDownloadsAll: state.downloads.listDownloadsAll,
  listUploadsPdf: state.uploads.listUploadsPdf,
  fileUploadSelected: state.downloads.fileUploadSelected
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ init, getPdf }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsForm);
