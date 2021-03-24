import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <div className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
    </div>
  </div>
);

export default Header;
