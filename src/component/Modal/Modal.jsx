import React from "react";
import { useSelector } from "react-redux";
import "./Modal.css";

export default function Modal(props) {
  const { showModal } = useSelector((state) => ({
    showModal: state.modal.show,
  }));
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main col-7">
        {props.children}
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <button
            type="buttom"
            className="btn btn-primary buttom-modal"
            onClick={props.handleClose}
          >
            Voltar
          </button>
        </div>
      </section>
    </div>
  );
}
