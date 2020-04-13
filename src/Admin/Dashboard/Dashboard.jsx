import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSummary } from "./DashboardActions";

import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import CustomBox from "../../component/CustomBox/CustomBox";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: this.props.summary,
      photo: null,
    };
  }

  componentDidMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;

    return (
      <React.Fragment>
        <ContentHeader
          title="Dashboard"
          subtitle="Resumo das atividades administrativas"
          icon="bar-chart"
        />
        <Content>
          <CustomBox
            cols="12"
            color="green"
            icon="bank"
            value={`R$ ${credit}`}
            text="Total de Crédito"
          />
          <CustomBox
            cols="12"
            color="red"
            icon="credit-card"
            value={`R$ ${debt}`}
            text="Total de Débito"
          />
          <CustomBox
            cols="12"
            color="blue"
            icon="money"
            value={`R$ ${credit - debt}`}
            text="ValorConsolidade"
          />
        </Content>
      </React.Fragment>
    );
  }
}

const mapStateProps = (store) => ({ summary: store.dashboard.summary });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateProps, mapDispatchToProps)(Dashboard);
