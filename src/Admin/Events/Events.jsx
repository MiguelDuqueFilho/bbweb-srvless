import React from "react";
import Header from "../../component/Header/Header";
// import { Container } from './styles';

export default function Events(props) {
  return (
    <React.Fragment>
      <Header {...props} />
      <div>
        <h1>Eventos</h1>
      </div>
    </React.Fragment>
  );
}
