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

  let summary = request.data.data;
  summary = {
    ...summary,
    dataTaskChat: renderTaskChart(request.data.data),
  };
  summary = {
    ...summary,
    dataTaskPercent: renderTaskPercent(request.data.data),
  };

  return {
    type: "DASHBOARD_SUMMARY_FETCHED",
    payload: summary,
  };
}

function renderTaskChart(values) {
  const { taskSummary } = values || {};

  let dataContent = Object.keys(taskSummary).map((key, index) => {
    const keyItem = taskSummary[key]["TaskStatus.taskStatusName"];
    const valueItem = taskSummary[key]["taskCount"];
    let item = [keyItem, valueItem];

    return item;
  });

  let data = [];

  if (taskSummary.length !== 0) {
    data = [["Tarefas", "Quantidade de tarefas"], ...dataContent];
  } else {
    data = [
      ["Tarefas", "Quantidade de tarefas"],
      ["none", 0],
    ];
  }
  return data;
}

function renderTaskPercent(values) {
  const { taskPercent } = values || {};

  let dataContent = Object.keys(taskPercent).map((key, index) => {
    const keyItem = `#${taskPercent[key]["id"]}`;
    const valueItem = taskPercent[key]["taskCompleted"];
    let item = [keyItem, valueItem];

    return item;
  });

  let data = [];

  if (taskPercent.length !== 0) {
    data = [["Tarefa", "%"], ...dataContent];
  } else {
    data = [
      ["Tarefa", "%"],
      ["#0", 0],
    ];
  }

  return data;
}
