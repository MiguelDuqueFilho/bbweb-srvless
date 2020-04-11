import api from "../../services/api";
import { toastr } from "react-redux-toastr";

import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";
import { validSearch } from "../../services/utils";

export function getList(page = 1, searchFilter = {}) {
  const limit = 8;
  const validatedSearch = validSearch(searchFilter);

  console.log("getList validatedSearch >>>>>>>");
  console.log(validatedSearch);

  let params = { search: validatedSearch };

  console.log("params>>>>>>>");
  console.log(params);
  return (dispatch) => {
    api
      .get(`/tasks?page=${page}&limit=${limit}`, {
        params,
      })
      .then((resp) => {
        dispatch([{ type: "TASKS_LIST_FETCHED", payload: resp.data.data }]);
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
  console.log(tasks);
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

export function init(page = 1, eventSelected = []) {
  const INITIAL_VALUES = {
    eventId: eventSelected.id,
    Events: {
      0: {
        eventName: eventSelected.eventName,
      },
    },
  };
  // const search = { eventId: eventSelected.id, searchPage: "" };
  return [
    showTabs("tabTimeLine", "tabCreate"),
    selectTab("tabTimeLine"),
    // getList(page, search),
    initialize("TasksForm", INITIAL_VALUES),
  ];
}
