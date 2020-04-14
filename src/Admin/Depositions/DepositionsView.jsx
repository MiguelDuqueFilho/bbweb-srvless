import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Depositions.css";
import { getDepositions } from "./DepositionsAction";
import DepositionsCard from "./DepositionsCard";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";

class DepositionsView extends Component {
  constructor(props) {
    super(props);

    this.props.getDepositions();
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Depoimentos View"
          subtitle="Click em ''Baixar Arquivo'' para receber o arquivo."
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
  bindActionCreators({ getDepositions }, dispatch);
export default connect(null, mapDispatchToProps)(DepositionsView);
