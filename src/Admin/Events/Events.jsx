import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import Tabs from "../../common/Tabs/tabs";
import TabsHeader from "../../common/Tabs/tabs";
import TabsContent from "../../common/Tabs/tabContent";
import TabHeader from "../../common/Tabs/tabHeader";
import TabContent from "../../common/Tabs/tabContent";
import EventList from "../../Admin/Events/EventsList";
import EventInsert from "../../Admin/Events/EventsInsert";
import { selectTab } from "../../common/Tabs/tabActions";

class Events extends Component {
  render() {
    return (
      <>
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
                <EventList />
              </TabContent>
              <TabContent id="tabCreate">
                <EventInsert />
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>tabUpdate</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>tabDelete</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);
export default connect(null, mapDispatchToProps)(Events);
