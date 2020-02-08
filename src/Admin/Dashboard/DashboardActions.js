import api from "../../services/api";

export function getSummary() {
  const request = api.get("/dashboard");
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request
  };
}
