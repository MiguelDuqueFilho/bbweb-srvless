import React from "react";
import "./Modal.css";

export default function Modal(props) {
  const showHideClassName = props.show
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
