import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "rc-pagination";
import "./Uploads.css";

import { getList, showUpdate, showDelete } from "./UploadsAction";

class UploadsList extends Component {
  handlePageClick = page => {
    this.props.getList(page);
  };

  renderRows() {
    const list = this.props.listUploads.docs || [];
    console.log(this.props);

    return list.map(file => (
      <tr key={file.id}>
        <td className="td-custom">{file.id}</td>
        <td className="td-custom">{file.fileName}</td>
        <td className="td-custom">{file.fileType}</td>
        <td className="td-custom">{file.fileSize}</td>
        <td className="td-custom">{file.fileUse ? "Sim" : "Não"}</td>
        <td className="td-actions">
          <button
            className="btn btn-warning m-1"
            onClick={() => this.props.showUpdate(file)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger m-1"
            readOnly={true}
            onClick={() => this.props.showDelete(file)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="row ">
        <div className="col-sm-12 ">
          <div className="card ">
            <h4 className="p-3 m-2 bg-primary shadown text-white rounded-lg">
              Uploads
            </h4>
            <div className="card-body ">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th className="th-custom w-5">#</th>
                    <th className="th-custom w-40">Nome </th>
                    <th className="th-custom w-30">Tipo </th>
                    <th className="th-custom w-10">Tamanho</th>
                    <th className="th-custom w-5">Uso</th>
                    <th className="th-actions w-10">Ações</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </table>
            </div>
            <Pagination
              onChange={this.handlePageClick}
              current={this.props.listUploads.page}
              total={this.props.listUploads.total}
              showLessItems
              showTitle={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  listUploads: state.uploads.listUploads
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UploadsList);
