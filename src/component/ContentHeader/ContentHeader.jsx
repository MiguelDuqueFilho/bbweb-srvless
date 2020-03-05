import React from "react";
import "./ContentHeader.css";

export default function ContentHeader(props) {
  return (
    <section className="content-header d-flex">
      <h4 className=" ml-5 d-flex flex-column">
        <span className={`fa fa-${props.icon}`}> {props.title} </span>
        <span className="subtitle pt-2 ml-5">{props.subtitle}</span>
      </h4>
    </section>
  );
}
