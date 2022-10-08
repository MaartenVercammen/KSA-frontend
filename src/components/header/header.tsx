import React from 'react';

import styles from './header.module.css';

function Header() {
  return (
    <header>
      <img
        src="/images/groepsfoto.webp"
        className={styles['header-img']}
        alt="groepsfoto bij de formatie"
      />
      <img
        src="/images/logo.png"
        className={styles.logo}
        alt="logo van KSA aarschot"
      />
    </header>
  );
}

export default Header;
