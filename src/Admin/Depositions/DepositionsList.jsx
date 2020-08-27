import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "rc-pagination";
import "./Depositions.css";

import { getList, showUpdate, showDelete } from "./DepositionsAction";

class DepositionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { search: { ...props.search } };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    this.props.getList(1, this.props.search);
    this.setState({ search: { ...this.props.search } });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search.searchHeader !== this.props.search.searchHeader ||
      prevProps.search.eventSelected !== this.props.search.eventSelected
    ) {
      this.setState({ search: { ...this.props.search } });
      this.props.getList(1, this.props.search);
    }
  }

  handlePageClick = (page) => {
    this.props.getList(page, this.props.search);
  };

  renderRows() {
    const list = this.props.listDepositionsAll.docs || [];

    return list.map((file) => (
      <tr key={file.id}>
        <td className="td-custom">{file.id}</td>
        <td className="td-custom">{file.Events[0]["eventName"]}</td>
        <td className="td-custom">{file.depositionTitle}</td>
        <td className="td-custom">{file.depositionShow ? "Sim" : "Não"}</td>
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
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              Depositions
            </h4>
            <div className="card-body ">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th className="th-custom w-5">#</th>
                    <th className="th-custom w-30">Evento</th>
                    <th className="th-custom w-40">Titulo</th>
                    <th className="th-custom w-10">Site</th>
                    <th className="th-actions w-15">Ações</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </table>
            </div>
            <Pagination
              onChange={this.handlePageClick}
              current={this.props.listDepositionsAll.page}
              total={this.props.listDepositionsAll.total}
              showLessItems
              showTitle={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  listDepositionsAll: state.depositions.listDepositionsAll,
  search: state.app.search,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DepositionsList);
