import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";

import { userTypeContent } from "../services/utils";

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
  return (dispatch) => {
    dispatch([{ type: "USER_LOGOFF", payload: false }]);
  };
}

function submit(values, url, history) {
  return (dispatch) => {
    api
      .post(url, values)
      .then((resp) => {
        dispatch([
          { type: "USER_FETCHED", payload: resp.data.data },
          resetForm("authForm"),
        ]);
        if (resp.data.success === true) {
          history.push(userTypeContent(resp.data.data.type).href);
          toastr.success("Ok", resp.data.message);
        } else {
          toastr.error("Erro", resp.data.message);
        }
      })
      .catch((e) => {
        if (typeof e.name !== "undefined") {
          toastr.error(e.name, e.message);
        } else {
          toastr.error("Erro", e.response.data.message);
        }

        dispatch(resetForm("authForm"));
      });
  };
}

export function submitForgot(values, url, history) {
  return (dispatch) => {
    api
      .post(url, values)
      .then((resp) => {
        dispatch([{ type: "USER_FORGOTED", payload: resp.data.success }]);
        if (resp.data.success) {
          toastr.success(
            "E-mail enviado!",
            "Verifique seu e-mail e siga as instruções para recuperar a sua senha."
          );
          history.push("/");
        } else {
          toastr.error("Erro", resp.data.message);
        }
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
        dispatch(resetForm("authForm"));
      });
  };
}

export function validateToken(token) {
  return (dispatch) => {
    if (token) {
      api
        .post("/validate_token", { token })
        .then((resp) => {
          dispatch({ type: "TOKEN_VALIDATED", payload: true });
        })
        .catch((e) => {
          if (typeof e.name !== "undefined") {
            toastr.error(e.name, e.message);
          } else {
            toastr.error("Erro", e.response.data.message);
          }
          dispatch({ type: "TOKEN_VALIDATED", payload: false });
        });
    }
  };
}

export function passwordRecovery(values, history) {
  return (dispatch) => {
    if (values) {
      api
        .post("/reset_password", values)
        .then((resp) => {
          history.push("/");
          toastr.success("Recuperação", "Troca de senha com sucesso.");
        })
        .catch((e) => {
          if (
            typeof e.name !== "undefined" &&
            typeof e.response.data.message === "undefined"
          ) {
            toastr.error(e.name, e.message);
          } else {
            toastr.error("Erro", "Token invalido ou expirado!!");
          }
        });
    }
  };
}

export function changePassword(values, history) {
  return (dispatch) => {
    if (values) {
      api
        .post("/change_password", values)
        .then((resp) => {
          history.push("/");
          toastr.success("Ok", "Troca de senha com sucesso.");
        })
        .catch((e) => {
          if (
            typeof e.name !== "undefined" &&
            typeof e.response.data.message === "undefined"
          ) {
            toastr.error(e.name, e.message);
          } else {
            toastr.error("Erro", "Erro na troca de senha!!");
          }
        });
    }
  };
}
