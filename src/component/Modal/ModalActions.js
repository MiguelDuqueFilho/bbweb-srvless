export async function closeModal() {
  return {
    type: "MODAL_CLOSED",
    payload: false,
  };
}
export async function openModal() {
  return {
    type: "MODAL_OPEN",
    payload: true,
  };
}
