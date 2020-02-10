import api from "../../services/api";

export function getEventsList() {
  const request = api.get("/events");
  return {
    type: "EVENTS_LIST_FETCHED",
    payload: request
  };
}
