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
import { init, create, update, remove, getList } from "./EventsAction";

import EventsList from "./EventsList";
import EventsForm from "./EventsForm";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { search: { ...props.search } };
  }
  componentDidMount() {
    this.props.init(1, this.props.search);
  }
  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Cadastro de Eventos"
          subtitle="Nesta pagina você pode fazer manutenção de eventos."
          icon="calendar"
        />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <EventsList />
              </TabContent>
              <TabContent id="tabCreate">
                <EventsForm
                  onSubmit={this.props.create}
                  title="Inclusão de Evento"
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <EventsForm
                  onSubmit={this.props.update}
                  title="Alteração de Evento"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <EventsForm
                  onSubmit={this.props.remove}
                  title="Exclusão de Evento"
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
      getList,
    },
    dispatch
  );
const mapStateToProps = (state) => ({
  search: state.app.search,
});
export default connect(mapStateToProps, mapDispatchToProps)(Events);
