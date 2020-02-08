import React, { Component } from "react";

import api from "../../services/api";
import Header from "../../component/Header/Header";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import CustomBox from "../../component/CustomBox/CustomBox";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  }

  componentWillMount() {
    api.get("/dashboard").then(resp => this.setState(resp.data));
  }

  render() {
    const { credit, debt } = this.state;

    return (
      <React.Fragment>
        <Header {...this.props} />
        <div>
          <ContentHeader title="Dashboard" subtitle="Verão 1.0"></ContentHeader>
          <Content>
            <CustomBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Crédito"
            />
            <CustomBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de Débito"
            />
            <CustomBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="ValorConsolidade"
            />
          </Content>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
