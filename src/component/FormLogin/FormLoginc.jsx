import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class FormLogin extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="input-block">
          <Field name="userEmail" component="input" />
          <Field name="password" component="input" />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "FormLogin" })(FormLogin);
