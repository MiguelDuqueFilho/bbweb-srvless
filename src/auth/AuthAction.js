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
  return dispatch => {
    dispatch([{ type: "USER_LOGOFF", payload: false }]);
  };
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
          history.push(userTypeContent(resp.data.data.type).href);
          toastr.success("Ok", resp.data.message);
        } else {
          toastr.warning("Alerta", resp.data.message);
        }
      })
      .catch(error => {
        if (error.response) {
          toastr.error("Error2", error.response.data.message);
        } else if (error.request) {
          toastr.error("Error3", error.request);
        } else {
          toastr.error("Error4", error.message);
        }

        dispatch(resetForm("authForm"));
      });
  };
}

export function submitForgot(values, url, history) {
  return dispatch => {
    api
      .post(url, values)
      .then(resp => {
        dispatch([{ type: "USER_FORGOTED", payload: resp.data.success }]);
        if (resp.data.success) {
          toastr.success(
            "E-mail enviado!",
            "Verifique seu e-mail e siga as instruções para recuperar a sua senha."
          );
          history.push("/");
        } else {
          toastr.warning("Alerta", resp.data.message);
        }
      })
      .catch(error => {
        if (error.response) {
          toastr.error("Error5", error.response.data.message);
        } else if (error.request) {
          toastr.error("Error6", error.request);
        } else {
          toastr.error("Error7", error.message);
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
            toastr.error("Error8", error.response.data.message);
          } else if (error.request) {
            toastr.error("Error9", error.request);
          } else {
            toastr.error("Error10", error.message);
          }
          dispatch({ type: "TOKEN_VALIDATED", payload: false });
        });
    }
  };
}

// export function validateRecovery(recoveryToken, history) {
//   console.log(">>>>>> validateRecovery values >>>>>>");
//   console.log(recoveryToken);
//   return dispatch => {
//     console.log(">>>Antes de Chamar if>>>");
//     console.log(recoveryToken);
//     if (recoveryToken) {
//       console.log(">>>Chamando api>>>");
//       api
//         .post("/recovery_validate", { recoveryToken })
//         .then(resp => {
//           console.log("retorno da Api recovery token >>>>>>");
//           dispatch({
//             type: "RECOVERY_TOKEN_VALIDATED",
//             payload: recoveryToken
//           });
//           history.push("/password");
//         })
//         .catch(error => {
//           console.log("retorno error da Api recovery token >>>>>>");
//           if (error.response) {
//             toastr.error("Error13", error.response.data.message);
//           } else if (error.request) {
//             toastr.error("Error14", error.request);
//           } else {
//             toastr.error("Error15", error.message);
//           }
//           dispatch({ type: "RECOVERY_TOKEN_VALIDATED", payload: "" });
//         });
//     }
//   };
// }

export function passwordRecovery(values, history) {
  console.log(">>>>>> passwordRecovery values >>>>>>");
  console.log(values);
  return dispatch => {
    if (values) {
      api
        .post("/reset_password", values)
        .then(resp => {
          history.push("/");
          toastr.success("Recuperação", "Troca de senha com sucesso.");
        })
        .catch(error => {
          if (error.response) {
            console.log(error);
            toastr.error("Error", "Token invalido ou expirado!!");
          } else if (error.request) {
            toastr.error("Error14", error.request);
          } else {
            toastr.error("Error15", error.message);
          }
        });
    }
  };
}
