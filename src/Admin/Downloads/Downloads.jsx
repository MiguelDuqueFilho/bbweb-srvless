import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Downloads.css";
import { downloadFile } from "./DownloadActions";

import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Content from "../../component/Content/Content";
import CustomBox from "../../component/CustomBox/CustomBox";

class Downloads extends Component {
  constructor(props) {
    super(props);
    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile(filename) {
    this.props.downloadFile(filename);
  }

  render() {
    const { filename, description } = {
      filename: "planner01.pdf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto, temporibus natus ratione ."
    };

    return (
      <React.Fragment>
        <ContentHeader
          title="Downloads"
          subtitle="Downloads disponiveis"
          icon="download"
        />
        <Content className="d-flex justify-content-around flex-wrap">
          <CustomBox
            cols="12 4 4"
            color="primary"
            icon="file"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="success"
            icon="book"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="dark"
            icon="file-pdf-o"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="info"
            icon="file-o"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="warning"
            icon="credit-card"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="danger"
            icon="credit-card"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
          <CustomBox
            cols="12 4 4"
            color="light"
            icon="credit-card"
            value={filename}
            text={description}
            labelOnClick="Baixar Arquivo"
            onClick={() => this.downloadFile(filename)}
          />
        </Content>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ downloadFile }, dispatch);
export default connect(null, mapDispatchToProps)(Downloads);
