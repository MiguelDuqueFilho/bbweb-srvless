import { toastr } from "react-redux-toastr";
import { reset } from "redux-form";
import api from "../services/api";

export function login(values) {
  return submit(values, "/login");
}

export function signup(values) {
  return submit(values, "/signup");
}

export function forgot(values) {
  return submitForgot(values, "/forgot_password");
}

function submit(values, url) {
  return dispatch => {
    api
      .post(url, values)
      .then(resp => {
        dispatch([{ type: "USER_FETCHED", payload: resp.data.data }]);
      })
      .catch(e => {
        if (
          typeof e.message !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error("Erro", e.message);
        } else {
          toastr.warning("Alerta", e.response.data.message);
        }
        dispatch(reset("authForm"));
      });
  };
}

function submitForgot(values, url) {
  return dispatch => {
    api
      .post(url, values)
      .then(resp => {
        dispatch([{ type: "USER_FORGOTED", payload: resp.data.success }]);
        if (resp.data.success) {
          toastr.success("Sucesso", resp.data.message);
        } else {
          toastr.warning("Alerta", resp.data.message);
        }
      })
      .catch(e => {
        if (
          typeof e.message !== "undefined" &&
          typeof e.response.data.message === "undefined"
        ) {
          toastr.error("Erro", e.message);
        } else {
          toastr.warning("Alerta", e.response.data.message);
        }
        dispatch(reset("authForm"));
      });
  };
}
// e.response.data.erros.forEach(error => toastr.error("Erro", error));

export function logoff() {
  return { type: "TOKEN_VALIDATED", payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      api
        .post("/validate_token", { token })
        .then(resp => {
          dispatch({ type: "TOKEN_VALIDATED", payload: resp.data.success });
        })
        .catch(e => {
          if (typeof e.message !== "undefined") {
            toastr.error("Erro", e.message);
          } else {
            toastr.warning("Alerta", e.response.data.message);
          }
        });
    }
  };
}
