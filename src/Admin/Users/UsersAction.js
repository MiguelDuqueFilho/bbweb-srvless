import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";

const INITIAL_VALUES = {
  listUsers: { docs: [], pages: 0, total: 0, page: 1 },
};

export async function getList(page = 1, limit = 10) {
  const request = await api.get(`/users`, {
    params: { page, limit },
  });
  return {
    type: "USERS_LIST_FETCHED",
    payload: request.data.data,
  };
}

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
    api[method](`/users/${id}`, values)
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

export function showUpdate(users) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("UsersForm", users),
  ];
}

export function showDelete(users) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("UsersForm", users),
  ];
}

export function init(page = 1) {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(page),
    initialize("UsersForm", INITIAL_VALUES),
  ];
}
