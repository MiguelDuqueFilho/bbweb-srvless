import React from 'react';
import './Final.css';

import logo from '../assets/img/LogoBeBride.png';
import { FaHeart } from 'react-icons/fa';

function Final() {
  return (
    <div className='container-fluid final-content'>
      <div className=' col-12 mr-auto ml-auto final mb-5'>
        <h2 className=' title'>
          <span>SEU CASAMENTO É ÚNICO E TEM QUE SER PERFEITO</span>
          <p>
            Vamos juntas?{' '}
            <FaHeart size={28} className='text-primary align-baseline' />
          </p>
        </h2>
        <img src={logo} alt='logo BeBride' className='logo' />
      </div>
    </div>
  );
}

export default Final;
