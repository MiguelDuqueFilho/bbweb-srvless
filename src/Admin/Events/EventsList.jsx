import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table } from "react-bootstrap";

import { getEventsList } from "./EventsAction";

class EventsList extends Component {
  componentDidMount() {
    this.props.getEventsList();
  }

  renderRows() {
    const list = this.props.listEvents.data || [];
    return list.map(evt => (
      <tr key={evt.id}>
        <td>{evt.id}</td>
        <td>{evt.eventName}</td>
        <td>{evt.eventDescription}</td>
        <td>{evt.EventTypes[0].eventTypeName}</td>
        <td>{evt.EventStatus[0].eventStatusName}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="p-3 bg-primary shadow text-white rounded-lg">
              Eventos
            </h4>
            <div className="card-body">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Evento</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.renderRows()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ listEvents: state.events.listEvents });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getEventsList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
