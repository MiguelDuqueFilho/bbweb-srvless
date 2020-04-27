import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";

const INITIAL_VALUES = {
  listUploads: { docs: [], pages: 0, total: 0, page: 1 },
  listUploadsDoc: [],
};

export async function getList(page = 1, limit = 10) {
  const request = await api.get(`/uploads?page=${page}&limit=${limit}`);
  return {
    type: "UPLOADS_GET_LIST_REQUEST",
    payload: request.data.data,
  };
}

export async function getDoc() {
  const request = await api.get(`/uploadstype/doc`);
  return {
    type: "UPLOADS_GET_DOC_REQUEST",
    payload: request.data.data,
  };
}

export async function getImg() {
  const request = await api.get(`/uploadstype/img`);
  return {
    type: "UPLOADS_GET_IMG_REQUEST",
    payload: request.data.data,
  };
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
    api[method](`/uploads/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
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

export function showUpdate(file) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("UploadsForm", file),
  ];
}

export function showDelete(file) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("UploadsForm", file),
  ];
}

export function init(page = 1) {
  return [
    showTabs("tabList", "tabFiles"),
    selectTab("tabList"),
    getList(page),
    initialize("UploadsForm", INITIAL_VALUES),
  ];
}
