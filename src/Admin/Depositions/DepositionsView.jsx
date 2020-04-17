import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Depositions.css";
import { getList } from "./DepositionsAction";
import DepositionsCard from "./DepositionsCard";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";

class DepositionsView extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Depoimentos View"
          subtitle="Visualizar depoimentos conforme o site"
          icon="star"
        />
        <Content className="content-view">
          <DepositionsCard />
        </Content>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(null, mapDispatchToProps)(DepositionsView);
