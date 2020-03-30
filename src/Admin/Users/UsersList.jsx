import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "rc-pagination";
import { userTypeContent } from "../../services/utils";
import "./UsersList.css";

import { getList, showUpdate, showDelete } from "./UsersAction";

class UsersList extends Component {
  handlePageClick = page => {
    this.props.getList(page);
  };

  renderRows() {
    const list = this.props.listUsers.docs || [];

    return list.map(usr => (
      <tr key={usr.id}>
        <td className="td-custom">{usr.id}</td>
        <td className="td-custom">{usr.userName}</td>
        <td className="td-custom">{usr.userEmail}</td>
        <td className="td-custom">{userTypeContent(usr.userType).name}</td>
        <td className="td-actions">
          <button
            className="btn btn-warning m-1"
            onClick={() => this.props.showUpdate(usr)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger m-1"
            readOnly={true}
            onClick={() => this.props.showDelete(usr)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="p-2 m-2 bg-primary  text-white rounded-lg">
              Usuários
            </h4>
            <div className="card-body">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th className="th-custom w-5">#</th>
                    <th className="th-custom w-30">Name</th>
                    <th className="th-custom w-30">E-mail</th>
                    <th className="th-custom w-20">Tipo</th>
                    <th className="th-actions w-15">Ações</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </table>
            </div>
            <Pagination
              onChange={this.handlePageClick}
              current={this.props.listUsers.page}
              total={this.props.listUsers.total}
              showLessItems
              showTitle={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ listUsers: state.users.listUsers });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
