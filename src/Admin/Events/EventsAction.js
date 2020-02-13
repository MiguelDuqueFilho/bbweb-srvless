import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";

export function getEventsList() {
  const request = api.get("/events");
  return {
    type: "EVENTS_LIST_FETCHED",
    payload: request
  };
}
export function eventsCreate(values) {
  return dispatch => {
    api
      .post("/events", values)
      .then(resp => {
        toastr.success("Sucesso", "Inclusão realizada com sucesso.");
        dispatch([resetForm("EventForm"), getEventsList()]); // favor verificar a ida para eventList
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
      });
  };
}
