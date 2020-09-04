import React, { Component } from 'react';
import './Why.css';

import Grid from '../component/Grid/Grid';
import { FaHeart, FaRegHeart, FaHistory, FaTasks } from 'react-icons/fa';

import { GiFemale, GiReceiveMoney } from 'react-icons/gi';

class Why extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='section text-center'>
          <div className='row'>
            <div className='why-block '>
              <h2 className='why title'>
                <p>
                  Por que nos contratar?{' '}
                  <FaHeart size={28} className='text-primary align-baseline ' />
                </p>
                <span>
                  (MOTIVOS PARA TER A GENTE COMO MELHORES AMIGAS, OPS...
                  ASSESSORAS!)
                </span>
              </h2>
            </div>
            <Grid cols='12 12 10 10 10 ' className=' mr-auto ml-md-auto'>
              <div className='why-text-block '>
                <p className='why-descr'>
                  <FaTasks
                    size={16}
                    className='text-primary align-baseline mr-2'
                  />
                  Nós cuidamos de{' '}
                  <span className='why-text-background'>cada detalhe</span> do
                  seu Grande Dia como se fosse o nosso, com muito{' '}
                  <span className='why-text-background'>amor</span> e{' '}
                  <span className='why-text-background'>respeito</span> pela
                  história do casal. Ouvimos cada ideia e trazemos juntas o seu
                  sonho para a realidade.
                </p>
                <p className='why-descr'>
                  <FaHistory
                    size={16}
                    className='text-primary align-baseline mr-2'
                  />
                  Casamento é{' '}
                  <span className='why-text-background'>toda a trajetória</span>
                  , não somente um único dia e queremos que vocês aproveitem
                  cada etapa dos preparativos. Por isso,{' '}
                  <span className='why-text-background'>
                    orientamos passo a passo
                  </span>{' '}
                  para que o casal se sinta amparado e seguro.
                </p>

                <p className='why-descr'>
                  <FaRegHeart
                    size={16}
                    className='text-primary align-baseline mr-2'
                  />
                  Amamos o que fazemos, por isso sempre estamos disponíveis para
                  atender e ouvir nosso casal, inclusive papear sobre os
                  detalhes é uma das coisas que{' '}
                  <span className='why-text-background'>
                    mais gostamos de fazer!
                  </span>
                </p>
                <p className='why-descr'>
                  <GiFemale
                    size={19}
                    className='text-primary align-baseline mr-2'
                  />
                  É importante dizer que{' '}
                  <span className='why-text-background'>
                    damos prioridade à indicação de mulheres
                  </span>{' '}
                  como fornecedores do seu Grande Dia. Uma das nossas missões é
                  fortalecer o empreendedorismo feminino.
                </p>
                <p className='why-descr'>
                  <GiReceiveMoney
                    size={19}
                    className='text-primary align-baseline mr-2'
                  />
                  Conseguimos melhores preços junto aos fornecedores.
                </p>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Why;
