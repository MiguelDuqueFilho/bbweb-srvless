import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Downloads.css";
import { getDownloads } from "./DownloadsAction";
import DownloadsCard from "./DownloadsCard";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";

class DownloadsView extends Component {
  constructor(props) {
    super(props);

    this.props.getDownloads();
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader
          title="Download View"
          subtitle="Click em ''Baixar Arquivo'' para receber o arquivo."
          icon="download"
        />
        <Content className="content-view">
          <DownloadsCard />
        </Content>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDownloads }, dispatch);
export default connect(null, mapDispatchToProps)(DownloadsView);
