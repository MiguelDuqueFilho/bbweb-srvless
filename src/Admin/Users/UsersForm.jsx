import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./UsersAction";
import If from "../../common/operator/if";

class UsersForm extends Component {
  constructor(props) {
    super(props);

    this.backPage = this.backPage.bind(this);
  }
  backPage() {
    this.props.init(this.props.listUsers.page);
  }

  render() {
    const { handleSubmit, readOnly, submitLabel } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h4 className="p-3 m-2 bg-primary shadow text-white rounded-lg">
              {this.props.title}
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-row">
                  <Field
                    component="input"
                    type="number"
                    name="id"
                    hidden={true}
                  />
                  <div className="col-sm-8  form-group">
                    <label htmlFor="userName">Nome</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="userName"
                      placeholder="Entre o nome"
                      readOnly={readOnly}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <label htmlFor="userEmail">E-mail</label>
                    <Field
                      className="form-control"
                      component="input"
                      type="text"
                      name="userEmail"
                      placeholder="Entre a descrição"
                      readOnly={readOnly || submitLabel !== "Incluir"}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-6 col-sm-6 col-md-6  form-group">
                    <label htmlFor="userTypeId">Tipo Usuário</label>
                    <Field
                      className="form-control"
                      component="select"
                      type="select"
                      name="userType"
                      readOnly={readOnly}
                    >
                      <option value="0">Visitante</option>
                      <option value="1">Administrador</option>
                      <option value="2">Cliente</option>
                      <option value="3">Fornecedor</option>
                    </Field>
                  </div>
                </div>
                <If test={submitLabel === "Incluir"}>
                  <div className="form-row">
                    <div className="col-md-4  form-group">
                      <label htmlFor="password">Senha</label>
                      <Field
                        className="form-control"
                        component="input"
                        type="password"
                        name="password"
                        placeholder="Senha..."
                        readOnly={readOnly}
                      />
                    </div>
                    <div className="col-md-4  form-group">
                      <label htmlFor="confirmPassword">Confirmar</label>
                      <Field
                        className="form-control"
                        component="input"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar Senha"
                        readOnly={readOnly}
                      />
                    </div>
                  </div>
                </If>
                <div className="d-flex flex-wrap justify-content-between mt-3">
                  <button
                    type="submit"
                    className={`btn btn-${this.props.submitClass}`}
                  >
                    {this.props.submitLabel}
                  </button>
                  <button
                    type="button"
                    className="btn btn-gray bg-light"
                    onClick={this.backPage}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UsersForm = reduxForm({
  form: "UsersForm",
  destroyOnUnmount: false
})(UsersForm);
const mapStateToProps = state => ({ listUsers: state.users.listUsers });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
