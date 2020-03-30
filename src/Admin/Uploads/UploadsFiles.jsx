import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Dropzone from "../../common/Dropzone/Dropzone";
import "./Uploads.css";
import Progress from "../../common/Progress/Progress";
import logo from "../../assets/img/logo45-01.png";
import { urls } from "../../services/utils";
import If from "../../common/operator/if";
import { init } from "./UploadsAction";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);
      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);
      const { user } = this.props.auth;
      req.open("POST", `${urls.BASE_URL}/uploads`);
      req.setRequestHeader("authorization", `Bearer ${user.token}`);
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <i
            className="fa fa-check-circle"
            alt="done"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() => {
            this.setState({
              files: [],
              uploading: false,
              successfullUploaded: false,
              uploadProgress: {}
            });
            this.props.init(this.props.listUploads.page);
          }}
        >
          Limpar Lista
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length === 0 || this.state.uploading}
          onClick={() => {
            this.uploadFiles();
          }}
        >
          Upload
        </button>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="card">
              <h4 className="p-3 m-2 bg-primary shadown text-white rounded-lg">
                Área para carregar arquivos - veja sites de compressão :
                <a
                  className="text-warning "
                  href="https://www.ilovepdf.com/pt/comprimir_pdf"
                >
                  <i className="ml-3 mr-3 fa fa-compress"> pdf</i>
                </a>
                <a
                  className="text-warning "
                  href="https://www.iloveimg.com/pt/comprimir-imagem"
                >
                  <i className="ml-3 mr-3 fa fa-image "> imagem</i>
                </a>
              </h4>
              <Dropzone
                logo={logo}
                onFilesAdded={this.onFilesAdded}
                disabled={
                  this.state.uploading || this.state.successfullUploaded
                }
              />
              <If test={this.state.files.length > 0}>
                <div className="Files">
                  <table className="table  table-striped ">
                    <thead>
                      <tr className="bg-secondary text-white ">
                        <th className="th-custom">Arquivo</th>
                        <th className="th-custom">Progresso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.files.map(file => {
                        return (
                          <tr key={file.name}>
                            <td className="td-custom">
                              <span className="Filename">{file.name}</span>
                            </td>
                            <td className="td-custom">
                              {this.renderProgress(file)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="Actions text-center">
                    {this.renderActions()}
                  </div>
                </div>
              </If>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
const mapStateToProps = state => ({
  auth: state.auth,
  listUploads: state.uploads.listUploads
});
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
