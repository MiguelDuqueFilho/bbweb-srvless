import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import If from "../operator/if";
import { selectTab } from "./tabActions";

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target];

    return (
      <If test={visible}>
        <div className={`tab-custom-item  ${selected ? "active" : ""}`}>
          <a
            href="#0"
            className="tab-custom-button"
            onClick={() => this.props.selectTab(this.props.target)}
            data-target={this.props.target}
          >
            <i className={`tab-custom-label fa fa-${this.props.icon}`}></i>{" "}
            {this.props.label}
          </a>
        </div>
      </If>
    );
  }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
