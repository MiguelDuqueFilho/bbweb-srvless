import FileSaver from "file-saver";
import { toastr } from "react-redux-toastr";
import api from "../../services/api";

export const downloadFile = file => async dispatch => {
  try {
    dispatch({
      type: "DOWNLOAD_FILE_REQUEST"
    });

    // const { headers, data } = await api.get(`/downloads/${file}`);
    const {
      data,
      headers: { "content-type": fileType }
    } = await api.get(`/downloads/${file}`, {
      responseType: "blob",
      timeout: 30000
    });

    const newFile = new File([data], file, {
      type: fileType
    });

    await FileSaver.saveAs(newFile, file);

    dispatch({
      type: "DOWNLOAD_FILE_SUCCESS"
    });
    toastr.success("Sucesso", "Arquivo baixado com sucesso!");
  } catch (error) {
    dispatch({
      type: "DOWNLOAD_FILE_ERROR"
    });

    if (error.response) {
      toastr.error("Erro", error.response.data.message);
      alert(error.response.data.message);
    } else {
      toastr.error("Erro", "Ocorreu um erro ao baixar este arquivo");
    }
  }
};
