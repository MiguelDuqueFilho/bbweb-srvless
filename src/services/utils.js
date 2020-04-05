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
      Type.title = "Área do Visitante";
      Type.href = "/guest";
      return Type;
    case 1:
      Type.name = "Administração";
      Type.title = "Área do Administrador";
      Type.href = "/admin";
      return Type;
    case 2:
      Type.name = "Cliente";
      Type.title = "Área do Cliente";
      Type.href = "/client";
      return Type;
    case 3:
      Type.name = "Fornecedor";
      Type.title = "Área do Fornecedor";
      Type.href = "/partner";
      return Type;
    default:
      return Type;
  }
}
