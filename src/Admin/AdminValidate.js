export const required = (value) =>
  value || typeof value === "number" ? undefined : "Campo obrigatório";
export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Precisa ter ${max} caracteres ou menos`
    : undefined;
export const maxLength15 = maxLength(15);
export const minLength = (min) => (value) =>
  value && value.length < min
    ? `Precisa ter ${min} caracteres ou mais`
    : undefined;
export const minLength2 = minLength(2);
export const number = (value) =>
  value && isNaN(Number(value)) ? "Precisa ser um número" : undefined;
export const minValue = (min) => (value) =>
  value && value < min ? `Deve ter pelo menos ${min}` : undefined;
export const minValue1 = minValue(1);
export const minValue13 = minValue(13);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Endereço de e-mail inválido"
    : undefined;
// export const tooYoung = value =>
//   value && value < 13 ? "Você não cumpre a idade mínima exigida!" : undefined;
// export const aol = value =>
//   value && /.+@gmail\.com/.test(value)
//     ? "Verdade? Você ainda usa a gmail para o seu email?"
//     : undefined;
export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Apenas caracteres alfanuméricos"
    : undefined;
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Número de telefone inválido, deve ter 10 dígitos"
    : undefined;
