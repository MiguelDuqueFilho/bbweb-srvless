import config from "../config";

export const urls = {
  BASE_URL: config.apiGateway.URL,
};

export function JSDateFormat(date) {
  let datetime = new Date(date);
  let temp = datetime.toLocaleDateString("pt-BR");
  // if (datetime.getUTCHours() !== 0) {
  //   const hour = datetime.getHours();
  //   const minute = datetime.getMinutes();
  //   const second = datetime.getSeconds();
  //   temp += " " + hour;
  //   temp += (minute < 10 ? ":0" : ":") + minute;
  //   temp += (second < 10 ? ":0" : ":") + second;
  // }
  return temp;
}

export function getModelTypes(id = null) {
  const ModelTypes = [
    {
      id: 1,
      title: "Assessoria do Dia",
      resume:
        "Nossa Assessoria do Dia foi pensada com muito carinho para atender os noivos no dia do seu evento.",
      icon: "GiPartyFlags",
      url: "/advice_day",
      show: false,
    },
    {
      id: 2,
      title: "Assessoria Final",
      resume:
        "O serviço de assessoria final começa a 60 dias (2 meses) antes do evento.",
      icon: "GiBigDiamondRing",
      url: "/advice_final",
      show: false,
    },
    {
      id: 3,
      title: "Assessoria Completa",
      resume:
        "Sinônimo de tranquilidade. Nossa Assessoria Completa é um serviço desenvolvido desde o início dos preparativos.",
      icon: "GiQueenCrown",
      url: "/advice_completed",
      show: false,
    },
    {
      id: 4,
      title: "Consultoria",
      resume:
        "Nossa Consultoria é o serviço ideal para o casal que deseja planejar e organizar seu próprio casamento.",
      icon: "GoBook",
      url: "/advice_consulting",
      show: false,
    },
  ];
  if (id === null) return ModelTypes;

  return ModelTypes[id];
}

export function userTypeContent(userType) {
  const Type = {
    name: "none",
    title: "none",
    href: "/",
  };
  switch (userType) {
    case 0:
      Type.name = "Visitante";
      Type.title = "Visitante";
      Type.href = "/guest";
      return Type;
    case 1:
      Type.name = "Administração";
      Type.title = "Administrador";
      Type.href = "/admin";
      return Type;
    case 2:
      Type.name = "Cliente";
      Type.title = "Cliente";
      Type.href = "/client";
      return Type;
    case 3:
      Type.name = "Fornecedor";
      Type.title = "Fornecedor";
      Type.href = "/partner";
      return Type;
    default:
      return Type;
  }
}

const INITIAL_SEARCH_VALUES = {
  searchHeader: "",
  eventSelected: {},
};

export function validSearch(search = INITIAL_SEARCH_VALUES) {
  const { searchHeader, eventSelected } = search;

  let searchReturn = {};

  if (Object.keys(search).length === 0) {
    return searchReturn;
  }

  if (typeof searchHeader !== "undefined" && searchHeader !== "") {
    searchReturn = { searchHeader };
  }

  if (
    typeof eventSelected !== "undefined" &&
    typeof eventSelected.id !== "undefined"
  ) {
    searchReturn = { ...searchReturn, eventSelected: eventSelected.id };
  }

  return searchReturn;
}
