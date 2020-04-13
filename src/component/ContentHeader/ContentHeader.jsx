import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFilter, FaUserCircle, FaTimes } from "react-icons/fa";

import "./ContentHeader.css";
import EventsSearch from "../../Admin/Events/EventsSearch";
import Modal from "../../component/Modal/Modal";
import If from "../../common/operator/if";
import { clearSelected } from "../../main/mainAction";

export default function ContentHeader(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const eventSelected = useSelector((state) => state.app.search.eventSelected);
  const [show, setShow] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideModal = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const closeModal = (e) => {
    setShow(false);
  };

  const clear = (e) => {
    e.preventDefault();
    dispatch(clearSelected());
  };

  return (
    <section className="content-header">
      <div>
        <h4 className="ml-3 d-flex flex-column">
          <div>
            <i className={`mr-2 fa fa-${props.icon}`}></i>
            <span className="title"> {props.title} </span>
          </div>
          <span className="subtitle pt-2 ml-5"> {props.subtitle}</span>
        </h4>
      </div>
      <div>
        <If test={user.type === 1}>
          <Modal show={show} handleClose={hideModal}>
            <EventsSearch closeModal={closeModal} />
          </Modal>
          <div className="search-event">
            <span onClick={showModal} className="btn btn-primary shadow">
              <FaFilter className="mr-2" />
              Selecionar Evento
            </span>
          </div>
        </If>
        <div className="event-selected">
          <span>
            <FaUserCircle className="mr-2" />
            {typeof eventSelected === "undefined" ||
            typeof eventSelected.id === "undefined"
              ? "Todos os eventos"
              : eventSelected.eventName}
          </span>
          <div className="search-event-destroy btn btn-primary btn-sm ml-2 rounded-circle font-weight-light ">
            <span onClick={clear}>
              <FaTimes size={14} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
