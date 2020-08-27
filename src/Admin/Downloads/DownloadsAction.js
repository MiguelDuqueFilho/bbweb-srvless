import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";
import FileSaver from "file-saver";

const INITIAL_VALUES = {
  listDownloadsall: { docs: [], pages: 0, total: 0, page: 1 },
};

export async function getList(page = 1, limit = 10) {
  const request = await api.get(`/downloads_all?page=${page}&limit=${limit}`);
  return {
    type: "DOWNLOAD_GET_ALL_FILES_REQUEST",
    payload: request.data.data,
  };
}

export const getDownloads = () => (dispatch) => {
  api
    .get("/downloads")
    .then((resp) => {
      dispatch([
        {
          type: "DOWNLOAD_GET_FILES_REQUEST",
          payload: resp.data.data,
        },
      ]);
    })
    .catch((e) => {
      if (
        typeof e.name !== "undefined" &&
        typeof e.response.data === "undefined"
      ) {
        toastr.error(e.name, e.message);
      } else {
        toastr.error("Erro", e.response.data.message);
      }
    });
};

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

export function submit(values, method) {
  return (dispatch) => {
    const id = values.id ? values.id : "";
    api[method](`/downloads/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        fileUpdateSelectedDoc(null);
        dispatch(init());
      })
      .catch((e) => {
        if (
          typeof e.name !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error(e.name, e.message);
        } else {
          toastr.error("Erro", e.response.data.message);
        }
      });
  };
}

export function fileUpdateSelectedDoc(fileId) {
  return (dispatch) => {
    dispatch([
      {
        type: "DOWNLOAD_SELECTED_FILES_UPLOAD",
        payload: fileId,
      },
    ]);
  };
}

export function showUpdate(file) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("DownloadsForm", file),
  ];
}

export function showDelete(file) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("DownloadsForm", file),
  ];
}

export function init(page = 1) {
  return [
    showTabs("tabView", "tabList", "tabCreate"),
    selectTab("tabList"),
    getList(page),
    getDownloads(),
    initialize("DownloadsForm", INITIAL_VALUES),
  ];
}

export const downloadFile = (fileId, fileName) => async (dispatch) => {
  try {
    dispatch({
      type: "DOWNLOAD_FILE_REQUEST",
    });

    const {
      data,
      headers: { "content-type": fileType },
    } = await api.get(`/downloads/${fileId}`, {
      responseType: "blob",
      timeout: 30000,
    });

    const newFile = new File([data], fileName, {
      type: fileType,
    });

    await FileSaver.saveAs(newFile, fileName);

    dispatch({
      type: "DOWNLOAD_FILE_SUCCESS",
    });
    toastr.success("Sucesso", "Arquivo baixado com sucesso!");
  } catch (e) {
    dispatch({
      type: "DOWNLOAD_FILE_ERROR",
    });
    if (
      typeof e.name !== "undefined" &&
      typeof e.response.data.message === "undefined"
    ) {
      toastr.error(e.name, e.message);
    } else {
      toastr.error("Erro", e.response.data.message);
      alert(e.response.data.message);
    }
  }
};
