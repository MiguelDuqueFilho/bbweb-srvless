import React, { Component } from 'react';
import './Plans.css';

import { getModelTypes } from '../services/utils';
import { FaWhatsapp, FaHeart } from 'react-icons/fa';

import Grid from '../component/Grid/Grid';
import * as Go from 'react-icons/go';
import * as Gi from 'react-icons/gi';

const Icon = (props) => {
  const { iconName } = props;
  let icon = null;
  if (iconName.substring(0, 2) === 'Go') {
    icon = React.createElement(Go[iconName]);
  } else {
    icon = React.createElement(Gi[iconName]);
  }
  return icon;
};
class Plans extends Component {
  onWhatsapp(values) {
    const celular_bebride = '5511940768615';
    const text = `Mensagem via site Be Bride\nSua mensagem: \n\n`;
    const textEncode = encodeURIComponent(text);

    const urlWhatsapp = `https://wa.me/${celular_bebride}?text=${textEncode}`;
    window.location.assign(urlWhatsapp);
  }

  renderRows() {
    const types = getModelTypes();
    return types.map((typ) => (
      <Grid key={typ.id} cols='12 9 5 3 3' className='ml-auto mr-auto'>
        {/* // <div  className="col-md-3"> */}
        <div className='info'>
          <div className='icon'>
            <Icon iconName={typ.icon} />
          </div>
          <h4 className='info-title'>{`${typ.title}`}</h4>
          <p>{typ.resume}</p>
          {/* <a href={typ.url}>Saiba Mais</a> */}
        </div>
      </Grid>
    ));
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='section text-center'>
          <div className='row'>
            <div className='col-md-12 ml-auto mr-auto'>
              <h2 className='title text-center'>
                Noiva tranquila é noiva organizada.{' '}
                <FaHeart size={28} className='text-primary' />
              </h2>

              <h4 className='description text-center'>
                Cada dia da organização do seu casamento deve ser celebrado.
              </h4>
            </div>
          </div>
          <div className='features'>
            <div className='row'>{this.renderRows()}</div>
          </div>
          <div className='row'>
            <Grid
              cols='12 12 6 6 6 '
              className='why-whatsapp mr-auto ml-md-auto'
            >
              <button
                type='button'
                className='btn btn-primary  btn-raised text-white '
                onClick={this.onWhatsapp}
              >
                <FaWhatsapp
                  size={28}
                  style={{ verticalAlign: 'inherit', paddingBottom: 4 }}
                  className='react-icons mr-3 '
                />
                Vamos juntas
              </button>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
