import React, { useState, useEffect } from "react";

import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tab, Tabs } from "react-bootstrap";

import { eventsCreate } from "./EventsAction";
import EventList from "./EventsList";
import EventForm from "./EventsForm";

function Events(props) {
  const [key, setKey] = useState("tablist");

  useEffect(() => {}, [key]);

  return (
    <>
      <ContentHeader
        title="Cadastro de Eventos"
        subtitle="Nesta pagina você pode fazer manutenção de eventos."
        icon="calendar"
      />
      <Content>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="tablist" title="Listar">
            <EventList />
          </Tab>

          <Tab eventKey="tabCreate" title="Incluir">
            <EventForm onSubmit={props.eventsCreate} />
          </Tab>

          <Tab eventKey="tabUpdate" title="Alterar" disabled>
            <p>Alterar</p>
          </Tab>

          <Tab eventKey="tabDelete" title="Excluir">
            <p>Excluir</p>
          </Tab>
        </Tabs>
        {/* <Tabs>
          <TabsHeader>
            <TabHeader label="Listar" icon="bars" target="tablist" />
            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
            <TabHeader label="Alterar" icon="bars" target="tabUpdate" />
            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
          </TabsHeader>
          <TabsContent></TabsContent>
        </Tabs> */}
      </Content>
    </>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ eventsCreate }, dispatch);
export default connect(null, mapDispatchToProps)(Events);
