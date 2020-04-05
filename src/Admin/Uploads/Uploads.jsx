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
import { init, update, remove } from "./UploadsAction";

import UploadsFiles from "./UploadsFiles";
import UploadsList from "./UploadsList";
import UploadsForm from "./UploadsForm";

class Uploads extends Component {
  componentDidMount() {
    this.props.init(1);
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Manutenção de Uploads"
          subtitle="A carga de arquivos pode ser feia via Click ou Drag in Drop. "
          icon="download"
        />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Uploads" icon="upload" target="tabFiles" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <UploadsList />
              </TabContent>
              <TabContent id="tabFiles">
                <UploadsFiles />
              </TabContent>
              <TabContent id="tabUpdate">
                <UploadsForm
                  onSubmit={this.props.update}
                  title="Alteração de Upload"
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <UploadsForm
                  onSubmit={this.props.remove}
                  title="Exclusão de Upload"
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
      update,
      remove,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Uploads);
