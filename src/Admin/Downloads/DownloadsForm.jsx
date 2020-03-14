import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init, upLoads } from "./DownloadsAction";

class DownloadsForm extends Component {
  constructor(props) {
    super(props);

    this.backPage = this.backPage.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  backPage() {
    this.props.init(this.props.listDownloadsAll.page);
  }

  // Component method
  handleFileUpload(file) {
    console.log("file>>>>>>");
    console.log(file);
    // const file = files[0];
    // this.props.actions.uploadRequest({
    //   file,
    //   name: "Awesome Cat Pic"
    // });
  }

  render() {
    const { handleSubmit, readOnly } = this.props;
    console.log("props >>>>>>>>>");
    console.log(this.props);
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
                <div className="form-row">
                  <div className="col-12 col-sm-6 col-md-4 form-group">
                    <label htmlFor="downloadFilename">
                      Para carregar o arquivo click no nome
                    </label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="downloadFilename"
                      onClick={this.handleFileUpload}
                      readOnly={true}
                    />
                    {/* <button
                      type="button"
                      className="btn btn-info mt-2"
                      onClick={this.upLoad}
                      hidden={readOnly}
                    >
                      Upload Arquivo
                    </button> */}
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
  listDownloadsAll: state.downloads.listDownloadsAll
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ init, upLoads }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsForm);
