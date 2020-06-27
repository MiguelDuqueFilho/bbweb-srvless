import React, { Component } from "react";
import "./Plans.css";
import { connect } from "react-redux";
import { getModelTypes } from "../services/utils";
import { FaHeart } from "react-icons/fa";

import * as Go from "react-icons/go";
import * as Gi from "react-icons/gi";

const Icon = (props) => {
  const { iconName } = props;
  let icon = null;
  if (iconName.substring(0, 2) === "Go") {
    icon = React.createElement(Go[iconName]);
  } else {
    icon = React.createElement(Gi[iconName]);
  }
  return icon;
};
class Plans extends Component {
  renderRows() {
    const types = getModelTypes();
    return types.map((typ) => (
      <div key={typ.id} className="col-md-3">
        <div className="info">
          <div className="icon">
            <Icon iconName={typ.icon} />
          </div>
          <h4 className="info-title">{`${typ.title}`}</h4>
          <p>{typ.resume}</p>
          <a href={typ.url}>Saiba Mais</a>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="section text-center">
          <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
              <h2 className="title">
                Noiva tranquila é noiva organizada.{" "}
                <FaHeart size={22} className="text-primary" />
              </h2>

              <h4 className="description text-center">
                Cada dia da organização do seu casamento deve ser celebrado.
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

const mapStateToProps = (state) => ({ site: state.site });
export default connect(mapStateToProps, null)(Plans);
