import React from "react";
import "./CustomBox.css";
import Grid from "../Grid/Grid";

export default function CustomBox(props) {
  return (
    <Grid cols={props.cols}>
      <div className={`card bg-${props.cols}`}>
        <div className="card-body">
          <div className="icon">
            <h5 className="card-title">
              <i className={`fa fa-${props.icon}`}> {props.value}</i>
            </h5>
          </div>
          <p className="card-text">{props.text}</p>
        </div>
        <button
          type="button"
          className={`btn btn-${props.color} `}
          onClick={props.onClick}
        >
          {props.labelOnClick}
        </button>
      </div>
    </Grid>
  );
}
