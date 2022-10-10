import React from 'react';

import groepsfoto from '../../images/groepsfoto.webp';

import './header.css';

console.log(groepsfoto);

function Header() {
  return (
    <header>
      <img
        src={groepsfoto}
        className="headerImg"
        alt="groepsfoto bij de formatie"
      />
      <img
        src="/images/logo.png"
        className="logo"
        alt="logo van KSA aarschot"
      />
    </header>
  );
}

export default Header;
