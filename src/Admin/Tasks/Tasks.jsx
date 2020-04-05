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
import { init } from "./TasksAction";
import TasksTimeline from "./TasksTimeline";
import TasksForm from "./TasksForm";

class Tasks extends Component {
  componentDidMount() {
    this.props.init(1);
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Tarefas de Eventos"
          subtitle="Visaão e manutenção de tarafas de eventos para controle administrativo. "
          icon="tasks"
        />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Timeline" icon="tasks" target="tabTimeLine" />
              <TabHeader label="Criar" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabTimeLine">
                <TasksTimeline />
              </TabContent>
              <TabContent id="tabCreate">
                <TasksForm
                  onSubmit={this.props.create}
                  title="Inclusão de tarefas"
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <TasksForm
                  onSubmit={this.props.update}
                  title="Alteração de tarefas"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <TasksForm
                  onSubmit={this.props.remove}
                  title="Exclusão de tarefas"
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
      // update,
      // remove
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Tasks);
