import React from 'react';

import groepsfoto from '../../images/groepsfoto.webp';
import logo from '../../images/logo.png';

import './header.css';

function Header() {
  return (
    <header>
      <img
        src={groepsfoto}
        className="headerImg"
        alt="groepsfoto bij de formatie"
      />
      <img
        src={logo}
        className="logo"
        alt="logo van KSA aarschot"
      />
    </header>
  );
}

export default Header;
