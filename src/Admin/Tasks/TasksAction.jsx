import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";

const INITIAL_VALUES = {
  listTasks: { docs: [], pages: 0, total: 0, page: 1 },
};

export async function getList(page = 1, limit = 10) {
  const request = await api.get(`/tasks?page=${page}&limit=${limit}`);
  return {
    type: "TASKS_LIST_FETCHED",
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
    api[method](`/tasks/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        dispatch(init());
      })
      .catch((e) => {
        if (
          typeof e.message !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error("Erro", e.message);
        } else {
          toastr.warning("Alerta", e.response.data.message);
        }
      });
  };
}

export function showUpdate(tasks) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("TasksForm", tasks),
  ];
}

export function showDelete(tasks) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("TasksForm", tasks),
  ];
}

export function init(page = 1) {
  return [
    showTabs("tabTimeLine", "tabCreate"),
    selectTab("tabTimeLine"),
    getList(page),
    initialize("TasksForm", INITIAL_VALUES),
  ];
}
