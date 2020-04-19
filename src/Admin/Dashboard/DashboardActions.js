import api from "../../services/api";
import { validSearch } from "../../services/utils";

const INITIAL_SEARCH_VALUES = {
  searchHeader: "",
  eventSelected: {},
};
export async function getSummary(searchFilter = INITIAL_SEARCH_VALUES) {
  const validatedSearch = validSearch(searchFilter);

  let params = { search: validatedSearch };
  const request = await api.get("/dashboard", {
    params,
  });
  return {
    type: "DASHBOARD_SUMMARY_FETCHED",
    payload: request.data.data,
  };
}
