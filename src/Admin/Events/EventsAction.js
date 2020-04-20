import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../../common/Tabs/tabActions";
import { validSearch } from "../../services/utils";

const INITIAL_VALUES = {
  listEvents: { docs: [], pages: 0, total: 0, page: 1 },
};

const INITIAL_SEARCH_VALUES = {
  searchHeader: "",
  eventSelected: {},
};

export function getList(page = 1, searchFilter = INITIAL_SEARCH_VALUES) {
  const limit = 9;
  const validatedSearch = validSearch(searchFilter);

  let params = { search: validatedSearch };

  return (dispatch) => {
    api
      .get(`/events?page=${page}&limit=${limit}`, {
        params,
      })
      .then((resp) => {
        dispatch([{ type: "EVENTS_LIST_FETCHED", payload: resp.data.data }]);
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
    api[method](`/events/${id}`, values)
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

export function showUpdate(events) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("EventsForm", events),
  ];
}

export function showDelete(events) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("EventsForm", events),
  ];
}

export function init(page = 1, searchFilter = INITIAL_SEARCH_VALUES) {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(page, searchFilter),
    initialize("EventsForm", INITIAL_VALUES),
  ];
}
