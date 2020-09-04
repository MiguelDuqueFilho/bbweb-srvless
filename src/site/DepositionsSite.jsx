import React, { Component } from 'react';

import './DepositionsSite.css';

import Grid from '../component/Grid/Grid';

class DepositionsSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date().getTime(),
    };
  }

  renderRows() {
    const list = [
      {
        id: 3,
        eventId: 1,
        depositionTitle: 'As meninas são INCRÍVEIS',
        depositionDescription:
          'As meninas são INCRÍVEIS, fizeram do meu casamento o conto de fadas que eu sempre sonhei! Gratidão eterna pelo trabalho realizado, muita luz e sucesso para vocês! Foi incrível!',
        depositionFilename: 'src/images/depositions/deposition_3.jpg',
        uploadId: 1,
        depositionShow: true,
        updatedAt: '2020-07-26T23:01:31.000Z',
        Events: [
          {
            eventName: 'Amanda & Stephanie',
          },
        ],
      },
      {
        id: 2,
        eventId: 2,
        depositionTitle: 'O meu sonho se realizou... ',
        depositionDescription:
          'O meu sonho se realizou... Foi incrível! Isso porque os serviços da Be Bride no meu casamento foram fundamentais para que tudo acontecesse redondinho e realmente possibilitasse realizar os meus sonhos. Super recomendo! Casamento só dá para curtir de verdade se você souber que tudo está bem e que será maravilhoso. É isso que a Be Bride e todo seu pessoal faz! Amei! Super obrigada.',
        depositionFilename: 'src/images/depositions/deposition_2.jpg',
        uploadId: 3,
        depositionShow: true,
        updatedAt: '2020-07-12T18:34:05.000Z',
        Events: [
          {
            eventName: 'Valeria & Kailane',
          },
        ],
      },
      {
        id: 1,
        eventId: 3,
        depositionTitle: 'Vocês são maravilhosas ',
        depositionDescription:
          'INCRÍVEL como as meninas da Be Bride cuidaram do meu pedido de casamento com tanto carinho e cuidado! Vocês são maravilhosas e já se preparem porque quem vai organizar meu casamento completo são vocês! MARAVILHOSAS!',
        depositionFilename: 'src/images/depositions/deposition_1.jpg',
        uploadId: 2,
        depositionShow: true,
        updatedAt: '2020-07-12T18:33:04.000Z',
        Events: [
          {
            eventName: 'Caio & Raphael',
          },
        ],
      },
    ];

    return list.map((list) => (
      <Grid key={list.id} cols='12 12 6 4 3' className='carrousel-item'>
        <div className='card '>
          <img
            src={require(`../assets/img/deposition_${list.id}.jpeg`)}
            alt='depositions'
          />
          <div className='card-body '>
            <h4 className='card-title'>{list.Events[0].eventName}</h4>
            <h5 className='card-title'>{list.depositionTitle}</h5>
            <p className='card-text'>{list.depositionDescription}</p>
          </div>
        </div>
      </Grid>
    ));
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 ml-auto mr-auto'>
            <h2 className='title'>Depoimentos</h2>
          </div>
        </div>
        <div className='top-content'>
          <div className='container-fluid'>
            <div className='carrousel slide '>
              <div className='carrousel-inner flex-wrap pb-5'>
                {this.renderRows()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DepositionsSite;
