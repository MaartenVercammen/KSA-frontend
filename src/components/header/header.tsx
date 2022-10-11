import React from 'react';

import styles from './header.module.css';

import logo from '../../images/logo.png';

function Header() {
  return (
    <header>
      <img
        src={logo}
        className={styles.logo}
        alt="logo van KSA aarschot"
      />
    </header>
  );
}

export default Header;
