import React, { Component } from 'react';
import './Team.css';
import team from '../assets/img/bruna-tamires.png';
import logo from '../assets/img/Bebride_Hand1.png';
import { FaHeart } from 'react-icons/fa';

export default class Team extends Component {
  render() {
    return (
      <div className='container-fluid team-content'>
        <img src={logo} alt='logo BeBride' className='logo' />
        <div className='row col-12 mr-auto ml-auto'></div>
        <div className='team-block '>
          <h2 className='team title'>
            <span>Nós gostamos de pessoas e </span>
            <p>
              gostamos de histórias de amor...{' '}
              <FaHeart size={28} className='text-primary align-baseline' />
            </p>
          </h2>
        </div>

        <div className='row col-12 mr-auto ml-auto'>
          <div className='col-md-3 team-content '>
            <img src={team} alt='team' className='rounded-circle img-fluid' />
            <div className='card-title text-center mt-3'>
              Bruna Duque e Tamires de Araujo
            </div>

            <div className='team-social text-center mt-3'>
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
              Unimos essa paixão e nossa amizade aos nossos ideais, trazendo à
              tona uma empresa que se posiciona e levanta bandeiras. E é nisso
              que ganhamos{' '}
              <span className='team-text-background'>
                reconhecimento e valor.
              </span>
            </p>
            <p className='team-descr'>
              Cada casal é{' '}
              <span className='team-text-background'>
                mais do que um cliente
              </span>
              , levamos como{' '}
              <span className='team-text-background'>amigos</span> para vida,
              quem nos segue nas redes sociais já sabe, não é difícil ver nossos
              noivos em nossos próprios lares. Gostamos de criar laços,
              proporcionar uma experiência única a quem nos escolhe para
              organizar e assessorar um dos dias mais importantes de sua vida.
            </p>
            <p className='team-descr'>
              <span className='team-text-background'>Gratidão e amor</span> é o
              que nos move. Nossa missão é fazer a diferença na vida das
              pessoas, seja as ajudando a realizar seus sonhos, planejando e
              organizando seus casamentos ou incentivando seus negócios, dando
              prioridade em indicar mulheres como fornecedoras.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
