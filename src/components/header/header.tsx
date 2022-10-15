import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <img src={groepsfoto} className="headerImg" alt="groepsfoto bij de formatie" />
      <img src={logo} className="logo" alt="logo van KSA aarschot" />
    </header>
  );
}

export default Header;
