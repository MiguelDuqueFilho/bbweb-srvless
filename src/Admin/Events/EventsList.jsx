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
    const list = this.props.listEvents || [];
    console.log(list);
    return list.map(evt => (
      <tr key={5}>
        <td>5</td>
        <td>{evt.nome}</td>
        <td>{evt.description}</td>
        <td>@mdo</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="p-3 bg-primary shadow text-white rounded-lg">
                Eventos
              </h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderRows()}
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
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
