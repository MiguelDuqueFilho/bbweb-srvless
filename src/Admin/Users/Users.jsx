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
import { init, create, update, remove } from "./UsersAction";

import UsersList from "./UsersList";
import UsersForm from "./UsersForm";

class Users extends Component {
  componentWillMount() {
    this.props.init(1);
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Cadastro de Usuários"
          subtitle="Nesta pagina você pode fazer manutenção de usuários."
          icon="users"
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
                <UsersList />
              </TabContent>
              <TabContent id="tabCreate">
                <UsersForm
                  onSubmit={this.props.create}
                  title="Inclusão de Usuário"
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <UsersForm
                  onSubmit={this.props.update}
                  title="Alteração de Usuário"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <UsersForm
                  onSubmit={this.props.remove}
                  title="Exclusão de Usuário"
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,
      create,
      update,
      remove
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Users);
