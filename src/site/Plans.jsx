import React, { Component } from "react";
import "./Plans.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTypes } from "./SiteAction";

class Plans extends Component {
  componentDidMount() {
    this.props.getTypes();
  }

  renderRows() {
    const types = this.props.site.eventTypes || [];
    return types.map(typ => (
      <div key={typ.id} className="col-md-3">
        <div className="info">
          <div className="icon">
            <i className={`fa fa-${typ.eventTypeIcon}`}></i>
          </div>
          <h4 className="info-title">{`${typ.eventTypeName}`}</h4>
          <p>{typ.eventTypeResumo}</p>
          <a href={typ.eventTypeUrl}>Saiba Mais</a>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="section text-center">
          <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
              <h2 className="title">Nós cuidamos de tudo para você.</h2>
              <h4 className="description">
                Cada dia da organização do seu casamento deve ser celebrados.
              </h4>
            </div>
          </div>
          <div className="features">
            <div className="row">{this.renderRows()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ site: state.site });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTypes }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Plans);
