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
import { init, create, update, remove } from "./DownloadsAction";

import DownloadsCard from "./DownloadsCard";
import DownloadsList from "./DownloadsList";
import DownloadsForm from "./DownloadsForm";

class Downloads extends Component {
  componentWillMount() {
    this.props.init(1);
  }

  render() {
    return (
      <>
        <ContentHeader
          title="Cadastro de Downloads"
          subtitle="Nesta pagina você pode fazer manutenção de Downloads."
          icon="download"
        />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Visão" icon="download" target="tabView" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <DownloadsList />
              </TabContent>
              <TabContent id="tabCreate">
                <DownloadsForm
                  onSubmit={this.props.create}
                  title="Inclusão de Download"
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabView">
                <DownloadsCard />
              </TabContent>
              <TabContent id="tabUpdate">
                <DownloadsForm
                  onSubmit={this.props.update}
                  title="Alteração de Download"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <DownloadsForm
                  onSubmit={this.props.remove}
                  title="Exclusão de Download"
                  submitLabel="Excluir"
                  submitClass="danger"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </>
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

export default connect(null, mapDispatchToProps)(Downloads);
