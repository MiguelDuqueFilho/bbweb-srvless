import React, { Component } from "react";
import { connect } from "react-redux";
import { urls } from "../services/utils";
import { getModelTypes } from "../services/utils";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import FooterSite from "./FooterSite";

class PlanDetailDay extends Component {
  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title="Assessoria do Dia"
          subtitle="Atender os noivos no dia do seu evento."
          banner={`${urls.BASE_URL}/images/banners${url}.png`}
        />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-10 ml-auto mr-auto">
                <h2 className="title text-center">{getModelTypes(0).title}</h2>
                <p className="text-justify  text-black-50">
                  Nossa{" "}
                  <span className="plan-text-background">
                    Assessoria do Dia
                  </span>{" "}
                  foi pensada com muito carinho para atender os noivos no dia do
                  seu evento. Mas claro que, para tudo sair perfeito como o
                  planejado, precisamos entender sobre seu casamento e tomar
                  conta de alguns detalhes importantíssimos! Nós{" "}
                  <span className="plan-text-background">
                    orientamos o casal
                  </span>{" "}
                  de 1 mês à 20 dias antes sobre alguns cuidados que precisam
                  ter e nos inteiramos de todo o evento, desenvolvendo junto com
                  o casal todos cronogramas necessários. No Grande Dia estaremos
                  desde o primeiro horário da montagem para garantir o perfeito
                  andamento da cerimônia e festa.
                </p>
                <p>
                  Acompanhamento na montagem do evento{" "}
                  <span className="plan-text-background">
                    desde o primeiro horário
                  </span>
                  :
                </p>
                <p></p>
                <p>Itens que contemplam a Assessoria do Dia:</p>
                <ul className="mb-5 ml-5  text-black-50">
                  <li>
                    Verificação do perfeito estado do local antes da chegada do
                    primeiro fornecedor.
                  </li>
                  <li>
                    Verificação do checklist contratado com os fornecedores.
                  </li>
                  <li>
                    Acompanhamento para o cumprimento de horários de entregas.
                  </li>
                  <li>Organização e auxílio de todo o cerimonial.</li>
                  <li>
                    Verificação e supervisão da qualidade dos serviços
                    prestados.
                  </li>
                  <li>Resoluções de problemas e imprevistos.</li>
                  <li>Recepção e contagem de convidados.</li>
                  <li>
                    Verificação da higiene e limpeza constante do local do
                    evento.
                  </li>
                  <li>
                    Verificação do atendimento e da satisfação dos convidados.
                  </li>
                  <li>
                    Organizar os presentes entregues no dia e a lista de
                    agradecimentos.
                  </li>
                </ul>
                   
              </div>
            </div>
          </div>
        </div>
        <FooterSite />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, site: state.site });
export default connect(mapStateToProps, null)(PlanDetailDay);
