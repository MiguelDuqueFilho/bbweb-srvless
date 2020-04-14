import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Depositions.css";
// import Pagination from "rc-pagination";
import { depositionFile, getDepositions } from "./DepositionsAction";

import CustomBox from "../../component/CustomBox/CustomBox";

class DepositionsCard extends Component {
  constructor(props) {
    super(props);
    this.depositionFile = this.depositionFile.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  depositionFile(fileId, fileName) {
    this.props.depositionFile(fileId, fileName);
  }

  renderRows() {
    const list = this.props.listDepositions || [];
    const cols = list.length <= 2 ? "12 12 6 6 6 " : "12 12 6 4 3 ";
    return list.map((file) => (
      <CustomBox
        key={file.id}
        className="card-deposition "
        cols={cols}
        color="info"
        icon="book"
        value={file.depositionTitle}
        text={file.depositionDescription}
        labelOnClick="Baixar Arquivo"
        onClick={() => this.depositionFile(file.id, file.depositionFilename)}
      />
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 ">
          <div className="card">
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              Deposition View
            </h4>
            <div className="card-body">
              <div className="d-flex justify-content-around flex-wrap ">
                {this.renderRows()}
              </div>
            </div>
            {/* <Pagination
              onChange={this.handlePageClick}
              current={this.props.listDepositionsAll.page}
              total={this.props.listDepositionsAll.total}
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
  listDepositions: state.depositions.listDepositions,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ depositionFile, getDepositions }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DepositionsCard);
