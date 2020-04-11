import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Downloads.css";
// import Pagination from "rc-pagination";
import { downloadFile, getDownloads } from "./DownloadsAction";

import CustomBox from "../../component/CustomBox/CustomBox";

class DownloadsCard extends Component {
  constructor(props) {
    super(props);
    this.downloadFile = this.downloadFile.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  downloadFile(fileId, fileName) {
    this.props.downloadFile(fileId, fileName);
  }

  renderRows() {
    const list = this.props.listDownloads || [];
    const cols = list.length <= 2 ? "12 12 6 6 6 " : "12 12 6 4 3 ";
    return list.map((file) => (
      <CustomBox
        key={file.id}
        className="card-download "
        cols={cols}
        color="info"
        icon="book"
        value={file.downloadTitle}
        text={file.downloadDescription}
        labelOnClick="Baixar Arquivo"
        onClick={() => this.downloadFile(file.id, file.downloadFilename)}
      />
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 ">
          <div className="card">
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              Download View
            </h4>
            <div className="card-body">
              <div className="d-flex justify-content-around flex-wrap ">
                {this.renderRows()}
              </div>
            </div>
            {/* <Pagination
              onChange={this.handlePageClick}
              current={this.props.listDownloadsAll.page}
              total={this.props.listDownloadsAll.total}
              showLessItems
              showTitle={false}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listDownloads: state.downloads.listDownloads,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ downloadFile, getDownloads }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DownloadsCard);
