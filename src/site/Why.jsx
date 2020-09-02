import React, { Component } from 'react';
import './Why.css';
import { connect } from 'react-redux';
import Grid from '../component/Grid/Grid';
import { FaWhatsapp } from 'react-icons/fa';

class Why extends Component {
  onWhatsapp(values) {
    const celular_bebride = '5511940768615';
    const text = `Mensagem via site Be Bride\nSua mensagem: \n\n`;
    const textEncode = encodeURIComponent(text);

    const urlWhatsapp = `https://wa.me/${celular_bebride}?text=${textEncode}`;
    window.location.assign(urlWhatsapp);
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='section text-center'>
          <div className='row'>
            <div className='why-block '>
              <h2 className='why title'>
                <p>Por que nos contratar?</p>
                <span>
                  (MOTIVOS PARA TER A GENTE COMO MELHORES AMIGAS, OPS...
                  ASSESSORAS!)
                </span>
              </h2>
            </div>
            <Grid cols='12 12 10 10 10 ' className=' mr-auto ml-md-auto'>
              <ul className='why-text-block '>
                <li className='why-descr'>
                  Nós cuidamos de{' '}
                  <span className='why-text-background'>cada detalhe</span> do
                  seu Grande Dia como se fosse o nosso, com muito{' '}
                  <span className='why-text-background'>amor</span> e{' '}
                  <span className='why-text-background'>respeito</span> pela
                  história do casal. Ouvimos cada ideia e trazemos juntas o seu
                  sonho para a realidade.
                </li>
                <li className='why-descr'>
                  Casamento é{' '}
                  <span className='why-text-background'>toda a trajetória</span>
                  , não somente um único dia e queremos que vocês aproveitem
                  cada etapa dos preparativos. Por isso,{' '}
                  <span className='why-text-background'>
                    orientamos passo a passo
                  </span>{' '}
                  para que o casal se sinta amparado e seguro.
                </li>

                <li className='why-descr'>
                  Amamos o que fazemos, por isso sempre estamos disponíveis para
                  atender e ouvir nosso casal, inclusive papear sobre os
                  detalhes é uma das coisas que{' '}
                  <span className='why-text-background'>
                    mais gostamos de fazer!
                  </span>
                </li>
                <li className='why-descr'>
                  É importante dizer que{' '}
                  <span className='why-text-background'>
                    damos prioridade à indicação de mulheres
                  </span>{' '}
                  como fornecedores do seu Grande Dia. Uma das nossas missões é
                  fortalecer o empreendedorismo feminino.
                </li>
                <li className='why-descr'>
                  Conseguimos melhores preços junto aos fornecedores.
                </li>
              </ul>
            </Grid>
          </div>
          <div className='row'>
            <Grid
              cols='12 12 6 6 6 '
              className='why-whatsapp mr-auto ml-md-auto'
            >
              <button
                type='button'
                className='btn btn-primary btn-raised text-white'
                onClick={this.onWhatsapp}
              >
                <FaWhatsapp className='react-icons mr-3' />
                Whatsapp
              </button>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Why);
