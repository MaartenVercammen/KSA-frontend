import React from 'react';

import styles from './header.module.css';

import backgroundImage from '../../images/groepsfoto.webp';
import logo from '../../images/logo.webp';

function Header() {
  return (
    <header>
      <img src={backgroundImage} className={styles.background} alt="" role="presentation" />
      <img src={logo} className={styles.logo} alt="" role="presentation" />
    </header>
  );
}

export default Header;
