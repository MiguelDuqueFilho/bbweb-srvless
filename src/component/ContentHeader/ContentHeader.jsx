import React from "react";
import "./ContentHeader.css";

export default function ContentHeader(props) {
  return (
    <section className="content-header d-flex">
      <h4 className=" ml-5 d-flex flex-column">
        <i className={`mr-2 fa fa-${props.icon}`}>
          <span className="title"> {props.title} </span>
        </i>
        <span className="subtitle pt-2 ml-4"> {props.subtitle}</span>
      </h4>
    </section>
  );
}
