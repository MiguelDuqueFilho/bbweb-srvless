import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";
import api from "../services/api";

export function sendemail(values) {
  return submitEmail(values, "/sendemail");
}
export function getTypes(values) {
  return submit(values, "/eventtypes", "EVENTTYPES_FETCHED");
}
export function getDepositionsShow(values) {
  return submit(values, "/depositions", "DEPOSITIONS_SITE_FETCHED");
}

function submitEmail(values, url) {
  return (dispatch) => {
    api
      .post(url, values)
      .then((resp) => {
        if (resp.data.success === true) {
          toastr.success("Ok", resp.data.message);
          dispatch([
            { type: "SENDEMAIL_FETCHED", payload: resp.data.success },
            resetForm("doubtsForm"),
          ]);
        } else {
          toastr.warning("Alerta", resp.data.message);
          dispatch([
            { type: "SENDEMAIL_FETCHED", payload: resp.data.success },
            resetForm("doubtsForm"),
          ]);
        }
      })
      .catch((e) => {
        if (
          typeof e.message !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error("Erro11", e.message);
        } else {
          toastr.warning("Alerta", e.response.data.message);
        }
        dispatch(resetForm("doubtsForm"));
      });
  };
}

function submit(values, url, type) {
  return (dispatch) => {
    api
      .get(url, values)
      .then((resp) => {
        dispatch([{ type, payload: resp.data.data }]);
      })
      .catch((e) => {
        if (
          typeof e.message !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error("Erro12", e.message);
        } else {
          toastr.warning("Alerta", e.response.data.message);
        }
      });
  };
}
