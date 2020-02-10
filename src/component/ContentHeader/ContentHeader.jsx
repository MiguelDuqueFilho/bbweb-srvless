import React from "react";

export default function ContentHeader(props) {
  return (
    <section className="content-header">
      <h5 className="p-3">{props.title}</h5>
      <h6 className="p-3">{props.subtitle}</h6>
    </section>
  );
}
