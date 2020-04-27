import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Uploads.css";
import { getDoc, getImg } from "./UploadsAction";
import { fileUpdateSelectedDoc } from "../Downloads/DownloadsAction";
import { fileUpdateSelectedImg } from "../Depositions/DepositionsAction";

class UploadsSearch extends Component {
  constructor(props) {
    super(props);
    this.setFilename = this.setFilename.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    if (this.props.type === "img") this.props.getImg();
    if (this.props.type === "doc") this.props.getDoc();
  }

  setFilename(event) {
    event.preventDefault();
    const fileId = event.target.getAttribute("data-item");
    if (this.props.type === "img") this.props.fileUpdateSelectedImg(fileId);
    if (this.props.type === "doc") this.props.fileUpdateSelectedDoc(fileId);
    this.props.closeModal();
  }

  renderRows(props) {
    let list = [];
    if (this.props.type === "img") list = props.listUploadsImg || [];
    if (this.props.type === "doc") list = props.listUploadsDoc || [];

    return list.map((file) => (
      <tr key={file.id}>
        <td className="td-custom">{file.id}</td>
        <td className="td-custom">{file.fileName}</td>
        <td className="td-actions">
          <button
            className={`btn btn-${
              parseInt(file.id) === parseInt(this.props.fileUploadSelected)
                ? "primary"
                : "info"
            } m-1`}
            data-item={file.id}
            onClick={this.setFilename}
          >
            <i data-item={file.id} className="fa fa-search-plus"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="card card-modal">
          <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
            Pesquisa arquivos
          </h4>
        </div>
        <div className="card-body card-body-modal">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th className="th-custom w-10">#</th>
                <th className="th-custom w-40">Nome </th>
                <th className="th-actions w-15">selecionar</th>
              </tr>
            </thead>
            <tbody>{this.renderRows(this.props)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listUploadsDoc: state.uploads.listUploadsDoc,
  listUploadsImg: state.uploads.listUploadsImg,
  fileUpdateSelectImg: state.depositions.fileUpdateSelectImg,
  fileUploadSelectDoc: state.downloads.fileUploadSelectDoc,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { getDoc, getImg, fileUpdateSelectedDoc, fileUpdateSelectedImg },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UploadsSearch);
