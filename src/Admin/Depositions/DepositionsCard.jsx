import React, { Component } from "react";
import path from "path";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Depositions.css";
import Pagination from "rc-pagination";
import Grid from "../../component/Grid/Grid";
import If from "../../common/operator/if";
import { urls } from "../../services/utils";
import { getList, showUpdate, showDelete } from "./DepositionsAction";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

class DepositionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { ...props.search },
      timestamp: new Date().getTime(),
    };
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
      this.setState({ timestamp: new Date().getDate() });
    }
  }

  handlePageClick = (page) => {
    this.props.getList(page, this.props.search);
  };

  renderRows() {
    const list = this.props.listDepositionsAll.docs || [];
    const cols = "12 12 6 6 6";
    return list.map((item) => (
      <Grid key={item.id} cols={cols} className="card-deposition">
        <If test={this.props.user.type === 1}>
          <div className="deposition-actions">
            <span
              className="btn btn-warning"
              readOnly={true}
              onClick={() => this.props.showUpdate(item)}
            >
              <FaPencilAlt size={18} />
            </span>
            <button
              className="btn btn-danger"
              readOnly={true}
              onClick={() => this.props.showDelete(item)}
            >
              <FaRegTrashAlt size={18} />
            </button>
          </div>
        </If>
        <div className="card mb-5">
          <div className="card-header-deposition">
            <img
              src={`${urls.BASE_URL}/images/depositions/deposition_${
                item.id
              }${path.extname(item.depositionFilename)}?v=${
                this.state.timestamp
              }`}
              alt="deposition"
            />
          </div>
          <i
            className={`icon fa fa-${
              item.depositionShow ? "eye" : "eye-slash"
            } text-${item.depositionShow ? "black" : "danger"}`}
          ></i>
          <div className="card-body-deposition">
            <h4 className="card-title">{item.Events[0]["eventName"]}</h4>
            <h5 className="card-subtitle">{item.depositionTitle}</h5>
            <p className="card-text">{item.depositionDescription}</p>
          </div>
        </div>
      </Grid>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 ">
          <div className="card">
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              Depoimentos View
            </h4>
            <Pagination
              onChange={this.handlePageClick}
              current={this.props.listDepositionsAll.page}
              total={this.props.listDepositionsAll.total}
              showLessItems
              showTitle={false}
            />
            <div className="card-body">
              <div className="deposition-rows flex-wrap ">
                {this.renderRows()}
              </div>
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
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DepositionsCard);
