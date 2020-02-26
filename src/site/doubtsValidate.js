export const required = value =>
  value || typeof value === "number" ? undefined : "Campo obrigatório";
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Endereço de e-mail inválido"
    : undefined;
