import React, { Component } from "react";
import { connect } from "react-redux";
import { urls } from "../services/utils";
import { getModelTypes } from "../services/utils";
import "./Site.css";

import HeaderSite from "./HeaderSite";
import BannerBody from "./BannerBody";
import FooterSite from "./FooterSite";

class PlanDetailConsulting extends Component {
  render() {
    const url = this.props.history.location.pathname;
    return (
      <React.Fragment>
        <HeaderSite />
        <BannerBody
          title="Consultoria"
          subtitle="Planejar e organizar seu próprio casamento com tranquilidade."
          banner={`${urls.BASE_URL}/images/banners${url}.png`}
        />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-10 ml-auto mr-auto">
                <h2 className="title text-center">{getModelTypes(3).title}</h2>
                <p className="text-justify text-black-50">
                  Nossa Consultoria é o serviço ideal para o casal que deseja
                  planejar e organizar seu próprio casamento com tranquilidade.
                  A Be Bride, após uma reunião com os noivos, desenvolve um
                  material exclusivo, ministrado em uma consultoria de 5 horas,
                  ensinando o casal passo a passo o que deve ser feito até o
                  Grande Dia. Após a consultoria, nossa equipe se disponibiliza
                  online para auxiliar o casal no que eles precisem ao longo de
                  todo o processo até o casamento.
                </p>
                <p className="text-justify text-black-50">
                  A consultoria pode ser adquirida junto com a Assessoria do Dia
                  ou Assessoria Final – para mais informações, confira as abas
                  desses serviços.
                </p>
                <p>Primeira reunião </p>
                <p className="text-justify text-black-50">
                  A primeira etapa é fazer o briefing. Nessa fase damos
                  prioridade em entender as escolhas e preferências do casal,
                  anseios e desejos, assim como seu perfil e personalidade que
                  serão usados como base para o projeto final. Aqui todo detalhe
                  conta.
                </p>

                <p>Montagem do Projeto </p>
                <p className="text-justify text-black-50">
                  Nessa etapa montamos um projeto detalhado dentro do estilo dos
                  noivos e fazemos a curadoria de profissionais que mais
                  combinam com o estilo proposto e baseado nas prioridades do
                  casal, sempre seguindo o seu orçamento. Um material de apoio
                  exclusivo é produzido em conjunto para auxiliar os noivos em
                  cada etapa.
                </p>

                <p>Consultoria online ou presencial </p>
                <p className="text-justify text-black-50">
                  Em uma data pré-agendada com os noivos, fazemos a consultoria
                  com duração de 5 (cinco) horas, em que ensinamos e orientamos
                  sobre todo o planejamento do Grande Dia. Planejamento
                  financeiro e controle dos gastos, análise de contratos e
                  negociações, fornecedores essenciais e secundários, pontos
                  sensíveis, análise de risco, tudo o que deve ser levado em
                  conta em cada etapa com dicas valiosas. O material de apoio
                  exclusivo é entregue ao casal.
                </p>

                <p>Reuniões e atendimento online</p>
                <p className="text-justify text-black-50">
                  Após a consultoria, ao longo de todo o planejamento, nossa
                  equipe se disponibiliza online para atender e esclarecer as
                  dúvidas dos noivos, os orientando e auxiliando no que for
                  preciso.
                </p>

                <p>Material de Apoio</p>
                <ul className="mb-5 ml-5 text-black-50">
                  <li>Cronograma do Evento</li>
                  <li>Planilha de Orçamentos</li>
                  <li>Planilha de Convidados</li>
                  <li>Planilha de Padrinhos</li>
                  <li>Planilha de Presentes</li>
                  <li>Checklist do Casamento</li>
                  <li>Checklist do Chá de Cozinha</li>
                  <li>Curadoria de Fornecedores</li>
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
export default connect(mapStateToProps, null)(PlanDetailConsulting);
