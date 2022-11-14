import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import styles from './navbar.module.css';

function NavBar() {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <div className={styles.navbar}>
      <HashLink smooth to="/#top">
        KSA Aarschot
      </HashLink>
      <label className={styles['toggle-button']} htmlFor="navbar-toggle">
        <input
          type="checkbox"
          id="navbar-toggle"
          checked={isMobileMenuOpen}
          onChange={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
        <i />
      </label>
      <nav className={styles.menu}>
        <ul>
          <li>
            <HashLink
              smooth
              to="/#news"
              scroll={scrollWithOffset}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#braggel"
              scroll={scrollWithOffset}
              onClick={() => setMobileMenuOpen(false)}
            >
              Braggel
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#leeftijden"
              scroll={scrollWithOffset}
              onClick={() => setMobileMenuOpen(false)}
            >
              Leeftijden
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={() => setMobileMenuOpen(false)}
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
