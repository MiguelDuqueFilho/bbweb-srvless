import React from "react";
import If from "../operator/if";

export default ({
  input,
  type,
  placeholder,
  icon,
  readOnly,
  hidden,
  meta: { visited, touched, error, warning }
}) => {
  return (
    <If test={!hidden}>
      <div className="input-group">
        <span className="input-group-prepend">
          <i className={`fa fa-${icon}`}></i>
        </span>
        <input
          {...input}
          className="form-control"
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
        />
      </div>
      {touched &&
        ((error && (
          <div className="alert alert-danger">
            <span>{error}</span>
          </div>
        )) ||
          (warning && (
            <div className="validate-warning alert alert-warning">
              <span>{warning}</span>
            </div>
          )))}
    </If>
  );
};
