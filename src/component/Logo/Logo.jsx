import React from 'react';
import './Logo.css';
import logo from '../../assets/img/logo.png';
import logoWhite from '../../assets/img/logo-white.png';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  console.log(props.navClassName);
  return (
    <div className='logo'>
      <Link className='logo-link text-decoration-none' to='/'>
        <img
          src={
            props.navClassName === 'navbar-color-on-scroll' ? logo : logoWhite
          }
          alt='logo BeBride'
        />
      </Link>
    </div>
  );
}
