import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";

import api from "../services/api";

export function login(values, history) {
  return submit(values, "/login", history);
}

export function signup(values, history) {
  return submit(values, "/signup", history);
}

export function forgot(values, history) {
  return submitForgot(values, "/forgot_password", history);
}

export function logout() {
  return { type: "TOKEN_VALIDATED", payload: false };
}

function submit(values, url, history) {
  return dispatch => {
    api
      .post(url, values)
      .then(resp => {
        dispatch([
          { type: "USER_FETCHED", payload: resp.data.data },
          resetForm("authForm")
        ]);
        if (resp.data.success === true) {
          history.push("/");
          toastr.success("Ok", resp.data.message);
        } else {
          toastr.warning("Alerta", resp.data.message);
        }
      })
      .catch(error => {
        if (error.response) {
          toastr.error("Error", error.response.data.message);
        } else if (error.request) {
          toastr.error("Error", error.request);
        } else {
          toastr.error("Error", error.message);
        }

        dispatch(resetForm("authForm"));
      });
  };
}

function submitForgot(values, url, history) {
  return dispatch => {
    api
      .post(url, values)
      .then(resp => {
        dispatch([{ type: "USER_FORGOTED", payload: resp.data.success }]);
        if (resp.data.success) {
          toastr.success("Ok", resp.data.message);
          history.push("/");
        } else {
          toastr.warning("Alerta", resp.data.message);
        }
      })
      .catch(error => {
        if (error.response) {
          toastr.error("Error", error.response.data.message);
        } else if (error.request) {
          toastr.error("Error", error.request);
        } else {
          toastr.error("Error", error.message);
        }
        dispatch(resetForm("authForm"));
      });
  };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      api
        .post("/validate_token", { token })
        .then(resp => {
          dispatch({ type: "TOKEN_VALIDATED", payload: true });
        })
        .catch(error => {
          if (error.response) {
            toastr.error("Error", error.response.data.message);
          } else if (error.request) {
            toastr.error("Error", error.request);
          } else {
            toastr.error("Error", error.message);
          }
          dispatch({ type: "TOKEN_VALIDATED", payload: false });
        });
    }
  };
}
