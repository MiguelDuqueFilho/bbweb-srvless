import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import Tabs from "../../common/Tabs/tabs";
import TabsHeader from "../../common/Tabs/tabsHeader";
import TabsContent from "../../common/Tabs/tabsContent";
import TabHeader from "../../common/Tabs/tabHeader";
import TabContent from "../../common/Tabs/tabContent";
import { init, create, update, remove } from "./DepositionsAction";

import DepositionsCard from "./DepositionsCard";
import DepositionsList from "./DepositionsList";
import DepositionsForm from "./DepositionsForm";

class Depositions extends Component {
  componentDidMount() {
    this.props.init(1, this.props.search);
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Cadastro de Depoimentos"
          subtitle="Nesta pagina você pode fazer manutenção de Depoimentos."
          icon="star"
        />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Visão" icon="star" target="tabView" />
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabView">
                <DepositionsCard />
              </TabContent>
              <TabContent id="tabList">
                <DepositionsList />
              </TabContent>
              <TabContent id="tabCreate">
                <DepositionsForm
                  onSubmit={this.props.create}
                  title="Inclusão de Depoimento"
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <DepositionsForm
                  onSubmit={this.props.update}
                  title="Alteração de Depoimento"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <DepositionsForm
                  onSubmit={this.props.remove}
                  title="Exclusão de Depoimento"
                  submitLabel="Excluir"
                  submitClass="danger"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      init,
      create,
      update,
      remove,
    },
    dispatch
  );
const mapStateToProps = (state) => ({
  search: state.app.search,
});
export default connect(mapStateToProps, mapDispatchToProps)(Depositions);
