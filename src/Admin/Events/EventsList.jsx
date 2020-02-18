import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./EventsList.css";

import { getList, showUpdate, showDelete } from "./EventsAction";

class EventsList extends Component {
  componentDidMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.listEvents || [];
    return list.map(evt => (
      <tr key={evt.id}>
        <td className="td-custom">{evt.id}</td>
        <td className="td-custom">{evt.eventName}</td>
        <td className="td-custom">{evt.EventTypes[0].eventTypeName}</td>
        <td className="td-custom">{evt.EventStatus[0].eventStatusName}</td>
        <td className="td-actions">
          <button
            className="btn btn-warning m-1"
            onClick={() => this.props.showUpdate(evt)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger m-1"
            readOnly={true}
            onClick={() => this.props.showDelete(evt)}
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
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              Eventos
            </h4>
            <div className="card-body">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th className="th-custom">#</th>
                    <th className="th-custom">Evento</th>
                    <th className="th-custom">Tipo</th>
                    <th className="th-custom">Status</th>
                    <th className="th-actions">Ações</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ listEvents: state.events.listEvents });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
