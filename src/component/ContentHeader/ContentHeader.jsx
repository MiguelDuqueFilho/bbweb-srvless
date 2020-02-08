import React from "react";

export default function ContentHeader(props) {
  return (
    <section className="content-header">
      <h1>
        {props.title} <small>{props.subtitle}</small>
      </h1>
    </section>
  );
}
