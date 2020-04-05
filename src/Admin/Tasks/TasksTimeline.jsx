import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "rc-pagination";
import { getList, showUpdate, showDelete } from "./TasksAction";
import { JSDateFormat } from "../../services/utils";
import "./Tasks.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FaRegTrashAlt,
  FaPencilAlt,
  FaArrowAltCircleDown,
  FaBusinessTime,
} from "react-icons/fa";

class TasksTimeline extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  handlePageClick = (page) => {
    this.props.getList(page);
  };

  renderRows() {
    const list = this.props.listTasks.docs || [];
    return list.map((task) => (
      <VerticalTimelineElement
        key={task.id}
        className={
          task.taskDuration === 0
            ? "vertical-timeline-element--alert"
            : "vertical-timeline-element--info"
        }
        date={
          task.taskDuration === 0
            ? `${JSDateFormat(task.taskStart)} - ${task.taskTime}`
            : `${JSDateFormat(task.taskStart)} à ${JSDateFormat(
                task.taskFinish
              )}`
        }
        iconStyle={
          task.taskDuration === 0
            ? {
                background: "#e91e63",
                color: "#fff",
              }
            : {
                background: "#2196f3",
                color: "#fff",
              }
        }
        icon={
          task.taskDuration === 0 ? (
            <FaBusinessTime size={24} />
          ) : (
            <FaArrowAltCircleDown size={24} />
          )
        }
      >
        <div className="timeline-actions">
          <span
            className="btn btn-warning"
            readOnly={true}
            onClick={() => this.props.showUpdate(task)}
          >
            <FaPencilAlt size={18} />
          </span>
          <button
            className="btn btn-danger"
            readOnly={true}
            hidden={task.taskSectionId === 1 ? true : false}
            onClick={() => this.props.showDelete(task)}
          >
            <FaRegTrashAlt size={18} />
          </button>
        </div>
        <h4 className="vertical-timeline-element-title">{task.taskName}</h4>
        <span className="vertical-timeline-element-subtitle">
          {task.TaskSections[0].taskSectionName}
        </span>
        <p>{task.taskDescription}</p>
      </VerticalTimelineElement>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="card">
              <h4 className="p-3 m-2 bg-primary shadown text-white rounded-lg">
                Tarefas
              </h4>
              <Pagination
                onChange={this.handlePageClick}
                current={this.props.listTasks.page}
                total={this.props.listTasks.total}
                showLessItems
                showTitle={false}
              />
              <div className="card-body">
                <VerticalTimeline>{this.renderRows()}</VerticalTimeline>
              </div>
              <Pagination
                onChange={this.handlePageClick}
                current={this.props.listTasks.page}
                total={this.props.listTasks.total}
                showLessItems
                showTitle={false}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ listTasks: state.tasks.listTasks });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksTimeline);
