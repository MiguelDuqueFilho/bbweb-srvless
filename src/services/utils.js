export const urls = {
  BASE_URL: "http://192.168.100.68:3030",
  ADM_URL: "http://192.168.100.68:3030/adm",
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

export function validSearch(search) {
  const { searchHeader, eventSelected } = search;

  let searchReturn = {};

  console.log(searchHeader);
  console.log(eventSelected);
  if (Object.keys(eventSelected).length === 0 && searchHeader === "") {
    console.log("vazio");
    return searchReturn;
  }

  if (typeof searchHeader !== "undefined" && searchHeader !== "") {
    searchReturn = { searchHeader };
  }

  if (typeof eventSelected !== "undefined") {
    searchReturn = { ...searchReturn, eventSelected: eventSelected.id };
  }

  console.log("validSearch searchReturn entregue >>>>>>>>");
  console.log(searchReturn);
  return searchReturn;
}
