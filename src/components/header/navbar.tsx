import React from 'react';
import { HashLink } from 'react-router-hash-link';

import styles from './navbar.module.css';

function NavBar() {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className={styles.navbar}>
      <HashLink smooth to="/#top">
        KSA Aarschot
      </HashLink>
      <input type="checkbox" id="navbar-toggle" />
      <label className={styles['toggle-button']} htmlFor="navbar-toggle"><i /></label>
      <nav className={styles.menu}>
        <ul>
          <li>
            <HashLink
              smooth
              to="/#news"
              scroll={scrollWithOffset}
            >
              News
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#braggel"
              scroll={scrollWithOffset}
            >
              Braggel
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#leeftijden"
              scroll={scrollWithOffset}
            >
              Leeftijden
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
