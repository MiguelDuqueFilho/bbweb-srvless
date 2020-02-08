import React from "react";
import Grid from "../Grid/Grid";

export default function CustomBox(props) {
  return (
    <Grid cols={props.cols}>
      <div className={`small-box bg-${props.cols}`}>
        <div className="inner">
          <h3>{props.value}</h3>
          <p>{props.text}</p>
        </div>
        <div className="icon">
          <i className={`fa fa-${props.icon}`}></i>
        </div>
      </div>
    </Grid>
  );
}
