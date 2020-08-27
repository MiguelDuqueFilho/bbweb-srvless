import React, { Component } from 'react';
import './Team.css';
import team from '../assets/img/bruna-tamires.png';
import logo from '../assets/img/logo.png';

export default class Team extends Component {
  render() {
    return (
      <div className='container-fluid team-content'>
        <img src={logo} alt='logo BeBride' />
        <h2 className='title'>Mas afinal, quem somos nós</h2>

        <div className='row col-12 mr-auto ml-auto'>
          <div className='col-md-3 team-content '>
            <img src={team} alt='team' className='rounded-circle img-fluid' />
            <div className='card-title text-center mt-3'>
              Bruna Duque e Tamires de Araujo
            </div>

            <div className='team-descr text-center mt-3'>
              <a
                href='https://www.facebook.com/bebridecasamentos'
                className='btn btn-link btn-just-icon'
              >
                <i className='fa fa-facebook-square'></i>
              </a>
              <a
                href='https://www.instagram.com/bebridecasamentos'
                className='btn btn-link btn-just-icon'
              >
                <i className='fa fa-instagram'></i>
              </a>
            </div>
          </div>
          <div className='col-md-9 mt-5 mt-3'>
            <p className='team-descr'>
              Olá! Somos duas,{' '}
              <span className='team-text-background'>Bruna e Tamires.</span> A
              Be Bride nasceu da nossa amizade e da vontade de fazer a
              diferença:
              <span className='team-text-background'>
                {' '}
                realizar sonhos.
              </span>{' '}
              Nós gostamos de pessoas e de histórias de amor, e não só isso, nós
              gostamos de unir nossos ideais ao que fazemos. Aqui{' '}
              <span className='team-text-background'>
                nós nos posicionamos, levantamos bandeiras e é nisso que
                ganhamos reconhecimento e valor.
              </span>
            </p>
            <p className='team-descr'>
              Cada casal é mais do que um cliente, levamos como amigos para
              vida, quem nos segue nas redes sociais já sabe, não é difícil ver{' '}
              <span className='team-text-background'>
                nossos noivos em nossos próprios lares.
              </span>{' '}
              Gostamos de criar laços, proporcionar uma{' '}
              <span className='team-text-background'>experiência única</span> a
              quem nos escolhe para organizar e assessorar um dos dias mais
              importantes de sua vida.
            </p>
            <p className='team-descr'>
              Gratidão e amor é o que nos move. Nossa missão é fazer a diferença
              na vida das pessoas, as ajudando a realizar seus sonhos, seja
              planejando e organizando seus casamentos ou incentivando seus
              negócios, dando{' '}
              <span className='team-text-background'>
                prioridade em indicar mulheres como fornecedoras.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
