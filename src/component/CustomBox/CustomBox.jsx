import React from "react";
import "./CustomBox.css";
import Grid from "../Grid/Grid";
import If from "../../common/operator/if";

export default function CustomBox(props) {
  return (
    <Grid cols={props.cols} className={props.className}>
      <div className={`card bg-${props.cols}`}>
        <div className="card-body">
          <div className="icon">
            <h5 className="card-title">
              <i className={`mr-2 fa fa-${props.icon}`}></i>
              <span>{props.value}</span>
            </h5>
          </div>
          <p className="card-text">{props.text}</p>
        </div>
        <If test={typeof props.onClick !== "undefined"}>
          <button
            type="button"
            className={`btn btn-${props.color} `}
            onClick={props.onClick}
          >
            <i className={`mr-2 fa fa-${props.icon}`}></i>
            <span>{props.labelOnClick}</span>
          </button>
        </If>
      </div>
    </Grid>
  );
}
