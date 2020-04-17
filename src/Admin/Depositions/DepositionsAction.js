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
  const limit = 8;
  const validatedSearch = validSearch(searchFilter);

  let params = { search: validatedSearch };

  return (dispatch) => {
    api
      .get(`/depositions_all?page=${page}&limit=${limit}`, {
        params,
      })
      .then((resp) => {
        dispatch([
          { type: "DEPOSITION_GET_ALL_FILES_REQUEST", payload: resp.data.data },
        ]);
      })
      .catch((error) => {
        if (error.response) {
          toastr.error("Error", error.response.data.message);
        } else if (error.request) {
          toastr.error("Error", error.request);
        } else {
          toastr.error("Error", error.message);
        }
      });
  };
}

export const getDepositions = () => (dispatch) => {
  api
    .get("/depositions")
    .then((resp) => {
      dispatch([
        {
          type: "DEPOSITION_GET_FILES_REQUEST",
          payload: resp.data.data,
        },
      ]);
    })
    .catch((error) => {
      if (error.response) {
        toastr.error("Error", error.response.data.message);
      } else if (error.request) {
        toastr.error("Error", error.request);
      } else {
        toastr.error("Error", error.message);
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
    api[method](`/depositions/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        fileUpdateSelectedImg(null);
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

export function fileUpdateSelectedImg(fileId) {
  return (dispatch) => {
    dispatch([
      {
        type: "DEPOSITION_SELECTED_FILES_UPLOAD",
        payload: fileId,
      },
    ]);
  };
}

export function showUpdate(file) {
  fileUpdateSelectedImg(null);
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("DepositionsForm", file),
  ];
}

export function showDelete(file) {
  fileUpdateSelectedImg(null);
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("DepositionsForm", file),
  ];
}

export function init(page = 1, searchFilter = INITIAL_SEARCH_VALUES) {
  const INITIAL_VALUES = {
    listDownloadsall: { docs: [], pages: 0, total: 0, page: 1 },
    eventId: searchFilter.eventSelected.id,
    Events: {
      0: {
        eventName: searchFilter.eventSelected.eventName,
      },
    },
    uploadId: null,
    depositionFilename: "",
  };
  fileUpdateSelectedImg(null);
  return [
    showTabs("tabView", "tabList", "tabCreate"),
    selectTab("tabList"),
    // getList(page, searchFilter),
    initialize("DepositionsForm", INITIAL_VALUES),
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
  return [initialize("DepositionsForm", INITIAL_VALUES)];
}
