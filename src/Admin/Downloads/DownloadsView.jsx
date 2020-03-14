import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Downloads.css";
import { downloadFile, getDownloads } from "./DownloadsAction";
import DownloadsCard from "./DownloadsCard";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import CustomBox from "../../component/CustomBox/CustomBox";

class DownloadsView extends Component {
  constructor(props) {
    super(props);

    this.props.getDownloads();

    this.downloadFile = this.downloadFile.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  downloadFile(filename) {
    this.props.downloadFile(filename);
  }

  renderRows() {
    const list = this.props.listDownloads || [];
    const cols = list.length <= 2 ? "12 12 6 6 6 " : "12 12 6 4 3 ";
    return list.map(file => (
      <CustomBox
        key={file.id}
        className="card-download"
        cols={cols}
        color="info"
        icon="file"
        value={file.downloadTitle}
        text={file.downloadDescription}
        labelOnClick="Baixar Arquivo"
        onClick={() => this.downloadFile(file.downloadFilename)}
      />
    ));
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

const mapStateToProps = state => ({
  listDownloads: state.downloads.listDownloads
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ downloadFile, getDownloads }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DownloadsView);
