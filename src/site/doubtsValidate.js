export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Campo obrigatório';
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Endereço de e-mail inválido'
    : undefined;
export const phone = (value) =>
  value &&
  !/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/i.test(value)
    ? 'Fone inválido  formato: 99 99999-9999'
    : undefined;
