import React, { Component } from "react";
import { connect } from "react-redux";
import { urls } from "../services/utils";
import { getModelTypes } from "../services/utils";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import FooterSite from "./FooterSite";

class PlanDetailFinal extends Component {
  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title=""
          subtitle=""
          banner={`${urls.BASE_URL}/images/banners${url}.png`}
        />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-10 ml-auto mr-auto">
                <h2 className="title text-center">{getModelTypes(1).title}</h2>
                <p className="text-justify text-black-50">
                  Nossa{" "}
                  <span className="plan-text-background">Assessoria Final</span>{" "}
                  é para o casal que deseja paz e sossego no final dos
                  preparativos. Assumimos completamente o controle da
                  organização 2 meses (60 dias) antes do evento, arrematando
                  todo o casamento junto dos fornecedores, padrinhos e
                  convidados com o RSVP.
                </p>
                <p></p>
                <p>
                  A Assessoria Final contempla TODOS OS ITENS da Assessoria do
                  Dia
                </p>
                <p></p>
                <p>Itens que contemplam a Assessoria Final:</p>
                <ul className="mb-5 ml-5 text-black-50">
                  <li>Análise de todos os contratos já assinados.</li>
                  <li>
                    Cobrança de prazos e certificação das informações
                    relacionadas ao local e data do evento.
                  </li>
                  <li>
                    Contratação de algum serviço faltante e checklist dos itens
                    essenciais para as últimas semanas
                  </li>
                  <li>
                    Mapear o local e arredores de forma que se conheça as rotas
                    mais rápidas para estabelecimentos-chave (supermercados,
                    farmácias, hospitais).
                  </li>
                  <li>
                    Fazer a análise de risco blindando o evento de imprevistos
                  </li>
                  <li>RSVP – confirmação dos convidados ao evento.</li>
                  <li>
                    Elaborar os roteiros das cerimônias civil, religiosa e da
                    festa, e assessorar no cerimonial e no receptivo.
                  </li>
                  <li>Ensaio com os padrinhos para o cortejo.</li>
                  <li>
                    Gerenciar todos os envolvidos dos diversos prestadores de
                    serviço e fornecedores, deixando claro os limites de suas
                    responsabilidades na montagem e desmontagem.
                  </li>
                  <li>
                    Elaboração dos cronogramas de serviço, festa, montagem e
                    desmontagem da festa e cerimônia.
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
export default connect(mapStateToProps, null)(PlanDetailFinal);
