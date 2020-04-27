import api from "../../services/api";
import { toastr } from "react-redux-toastr";

import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";
import { validSearch } from "../../services/utils";

const INITIAL_SEARCH_VALUES = {
  searchHeader: "",
  eventSelected: {},
};

export function getList(page = 1, searchFilter = INITIAL_SEARCH_VALUES) {
  const limit = 10;
  const validatedSearch = validSearch(searchFilter);

  let params = { search: validatedSearch };

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

export function init(page = 1, searchFilter = INITIAL_SEARCH_VALUES) {
  const INITIAL_VALUES = {
    listTasks: { docs: [], pages: 0, total: 0, page: 1 },
    eventId: searchFilter.eventSelected.id,
    Events: {
      0: {
        eventName: searchFilter.eventSelected.eventName,
      },
    },
  };

  return [
    showTabs("tabTimeLine", "tabCreate"),
    selectTab("tabTimeLine"),
    // getList(page, searchFilter),
    initialize("TasksForm", INITIAL_VALUES),
  ];
}

export function initForm(searchFilter = INITIAL_SEARCH_VALUES) {
  const INITIAL_VALUES = {
    eventId: searchFilter.eventSelected.id,
    Events: {
      0: {
        eventName: searchFilter.eventSelected.eventName,
      },
    },
  };
  return [initialize("TasksForm", INITIAL_VALUES)];
}
