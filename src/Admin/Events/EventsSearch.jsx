import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "rc-pagination";
import "./Events.css";
import { getList } from "./EventsAction";
import { setEventSelected } from "../../main/mainAction";

class EventsSearch extends Component {
  constructor(props) {
    super(props);
    this.setEventSelect = this.setEventSelect.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    if (this.props.listEvents.total === 0) {
      this.props.getList();
    }
  }

  handlePageClick = (page) => {
    this.props.getList(page);
  };

  setEventSelect(event) {
    event.preventDefault();
    const eventId = event.target.getAttribute("data-item");
    this.props.setEventSelected(eventId);
    this.props.closeModal();
  }

  renderRows(props) {
    const list = this.props.listEvents.docs || [];

    return list.map((Event) => (
      <tr key={Event.id} className="tr-custom">
        <td className="td-custom">{Event.id}</td>
        <td className="td-custom">{Event.eventName}</td>
        <td className="td-custom">{Event.EventStatus[0].eventStatusName}</td>
        <td className="td-actions">
          <button
            className={`btn btn-${
              parseInt(Event.id) === parseInt(this.props.eventSelected)
                ? "primary"
                : "info"
            } m-1`}
            data-item={Event.id}
            onClick={this.setEventSelect}
          >
            <i data-item={Event.id} className="fa fa-search-plus"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="card card-modal mt-3">
          <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
            Pesquisa eventos
          </h4>
        </div>
        <div className="card-body card-body-modal">
          <table className="table table-striped ">
            <thead>
              <tr className="tr-custom">
                <th className="th-custom w-10">#</th>
                <th className="th-custom w-30">Nome </th>
                <th className="th-custom w-15">Status</th>
                <th className="th-actions w-15">selecionar</th>
              </tr>
            </thead>
            <tbody>{this.renderRows(this.props)}</tbody>
          </table>
        </div>
        <Pagination
          onChange={this.handlePageClick}
          current={this.props.listEvents.page}
          total={this.props.listEvents.total}
          showLessItems
          showTitle={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listEvents: state.events.listEvents,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, setEventSelected }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsSearch);
