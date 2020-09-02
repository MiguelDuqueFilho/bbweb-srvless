import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';
import Grid from '../component/Grid/Grid';
import { FaHeart } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='section text-center'>
          <div className='row'>
            <div className='about-block '>
              <h2 className='about title'>
                <span>Nós gostamos de pessoas e </span>
                <p>
                  gostamos de histórias de amor...{' '}
                  <FaHeart size={38} className='text-primary' />
                </p>
              </h2>
            </div>
            <Grid cols='12 12 10 10 10 ' className=' mr-auto ml-md-auto'>
              <div className='about-text-block'>
                <p className='about-descr'>
                  Unimos essa paixão e nossa amizade aos nossos ideais, trazendo
                  à tona uma empresa que se posiciona e levanta bandeiras. E é
                  nisso que ganhamos{' '}
                  <span className='about-text-background'>
                    reconhecimento e valor.
                  </span>
                </p>
                <p className='about-descr'>
                  Cada casal é{' '}
                  <span className='about-text-background'>
                    mais do que um cliente
                  </span>
                  , levamos como{' '}
                  <span className='about-text-background'>amigos</span> para
                  vida, quem nos segue nas redes sociais já sabe, não é difícil
                  ver nossos noivos em nossos próprios lares. Gostamos de criar
                  laços, proporcionar uma experiência única a quem nos escolhe
                  para organizar e assessorar um dos dias mais importantes de
                  sua vida.
                </p>
                <p className='about-descr'>
                  <span className='about-text-background'>Gratidão e amor</span>{' '}
                  é o que nos move. Nossa missão é fazer a diferença na vida das
                  pessoas, seja as ajudando a realizar seus sonhos, planejando e
                  organizando seus casamentos ou incentivando seus negócios,
                  dando prioridade em indicar mulheres como fornecedoras.
                </p>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(About);
