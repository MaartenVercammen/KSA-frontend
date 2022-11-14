import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Roles } from '../../types';

import styles from './navbar.module.css';

const NavbarLink = lazy(() => import('./navbarLink'));

type Props = {
  isAllowed: Roles;
};

function NavbarDashboard({ isAllowed }: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <span>
        Dashboard
      </span>
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
          {[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL].includes(isAllowed) && (
            <NavbarLink name="Braggel" url="/braggel" setMobileMenuOpen={setMobileMenuOpen} />
          )}
          {[Roles.ADMIN].includes(isAllowed) && (
            <NavbarLink name="Users" url="/users" setMobileMenuOpen={setMobileMenuOpen} />
          )}
          {[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL].includes(isAllowed) && (
            <NavbarLink name="Nieuws" url="/Nieuws" setMobileMenuOpen={setMobileMenuOpen} />
          )}
          <li>
            <Link to="/">Site</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarDashboard;
