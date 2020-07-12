import React, { Component } from "react";
import { connect } from "react-redux";
import { urls } from "../services/utils";
import { getModelTypes } from "../services/utils";
import "./PlanDetail.css";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import FooterSite from "./FooterSite";

class PlanDetailCompleted extends Component {
  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title="Assessoria Completa"
          subtitle="Sinônimo de Tranquilidade"
          banner={`${urls.BASE_URL}/images/banners${url}.png`}
        />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-10 ml-auto mr-auto">
                <h2 className="title text-center">{getModelTypes(2).title}</h2>
                <p className="text-center mb-5">
                  <h5>
                    <span className="plan-text-background">
                      Sinônimo de Tranquilidade
                    </span>
                  </h5>
                </p>
                <p className="text-justify text-black-50">
                  A{" "}
                  <span className="plan-text-background">
                    Assessoria Completa
                  </span>{" "}
                  é um serviço desenvolvido especialmente pela Be Bride para
                  trazer tranquilidade aos noivos. Nossa equipe planeja e
                  organiza seu evento do início ao fim, deixando para vocês a
                  melhor parte: a experiência incrível da trajetória até o
                  Grande Dia. Nosso objetivo aqui é que vocês não tenham nenhuma
                  preocupação e aproveitem cada detalhe.
                </p>

                <p>A Assessoria Completa é dividida em 3 partes:</p>
                <ol className="mb-5 ml-5 text-black-50">
                  <li className="text-dark">
                    Primeiros Passos:
                    <ul className="text-black-50">
                      <li>
                        Identificar o perfil do cliente e fazer o briefing do
                        evento/cerimônia.
                      </li>
                      <li>
                        Desenvolver o orçamento e planejamento financeiro do
                        evento com os noivos.
                      </li>
                      <li>
                        Iniciar o planejamento do evento/cerimônia, respeitando
                        todas as etapas.
                      </li>
                      <li>
                        Promover as parcerias entre os diversos segmentos
                        envolvidos no casamento.
                      </li>
                      <li>
                        Elaborar cronograma geral das atividades pré e pós
                        casamento.
                      </li>
                      <li>
                        Seguindo o orçamento e orientação dos noivos, fazer a
                        curadoria de empresas e fornecedores que atendam as
                        necessidades e porte do evento.
                      </li>
                    </ul>
                  </li>
                  <li className="text-dark">
                    O Sonho saindo do Papel
                    <ul className="text-black-50">
                      <li>
                        Mapear o local e arredores de forma que se conheça as
                        rotas mais rápidas para estabelecimentos chave
                        (supermercados, farmácias, hospitais).
                      </li>
                      <li>
                        Verificação de local para estacionamento durante a
                        cerimônia e festa.
                      </li>
                      <li>
                        Verificar e elaborar a lista de itens de segurança
                        necessários.
                      </li>
                      <li>
                        Organizar a lista de convidados e endereços com a
                        finalidade de envio, produzir protocolos de entrega ou
                        endereçamentos para o correio, e emitir lista final de
                        convidados e de agradecimentos.
                      </li>
                      <li>
                        Verificar necessidades especiais de convidados
                        (restrições alimentares, físicas...) para adequação do
                        menu e acesso ao evento.
                      </li>
                      <li>
                        Providenciar reservas para hospedagem de convidados,
                        caso necessário.
                      </li>
                      <li>RSVP – confirmação dos convidados ao evento.</li>
                      <li>
                        Elaborar os roteiros das cerimônias civil, religiosa e
                        da festa, e assessorar no cerimonial e no receptivo.
                      </li>
                      <li>
                        Realizar reuniões prévias com todos os fornecedores,
                        esclarecendo todos os detalhes e definindo
                        responsabilidades.
                      </li>
                      <li>
                        Gerenciar todos os envolvidos dos diversos prestadores
                        de serviço e fornecedores, deixando claro os limites de
                        suas responsabilidades na montagem e desmontagem.
                      </li>
                    </ul>
                  </li>
                  <li className="text-dark">
                    Viva la Fiesta
                    <p>
                      Acompanhamento na montagem do evento desde o primeiro
                      horário:
                    </p>
                    <ul className="text-black-50">
                      <li>
                        Verificação do local antes da chegada do primeiro
                        fornecedor.
                      </li>
                      <li>
                        Verificação do checklist contratado com os fornecedores.
                      </li>
                      <li>
                        Acompanhamento para o cumprimento de horários de
                        entregas.
                      </li>
                      <li>
                        Verificação e supervisão da qualidade dos serviços
                        prestados, seguindo protocolos de segurança.
                      </li>
                      <li>Resoluções de problemas e imprevistos.</li>
                      <li>Recepção e contagem de convidados.</li>
                      <li>Organização e auxílio no Cerimonial</li>
                      <li>
                        Verificação da higiene e limpeza constante do local do
                        evento.
                      </li>
                      <li>
                        Verificação do atendimento e da satisfação dos
                        convidados.
                      </li>
                      <li>
                        Organizar os presentes entregues no dia e a lista de
                        agradecimentos.
                      </li>
                      <li>Acompanhamento na desmontagem do evento.</li>
                    </ul>
                  </li>
                </ol>
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
export default connect(mapStateToProps, null)(PlanDetailCompleted);
