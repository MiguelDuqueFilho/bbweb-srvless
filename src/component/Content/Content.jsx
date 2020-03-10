import React from "react";

export default function Content(props) {
  return (
    <section className={`content p-3 ${props.className}`}>
      {props.children}
    </section>
  );
}
