import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Roles } from '../../types';
import NavbarLink from './navbarLink';

import styles from './navbarDashboard.module.css';

type Props = {
  isAllowed: Roles;
};

function NavbarDashboard({ isAllowed }: Props) {
  const [navdropdown, setnavdropdown] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <span>
        Dashboard
      </span>
      <input type="checkbox" id="navbar-toggle" checked={navdropdown}/>
      <label className={styles['toggle-button']} htmlFor="navbar-toggle"><i /></label>
      <nav className={styles.menu}>
        <ul>
          {[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL].includes(isAllowed) && (
            <NavbarLink name="Braggel" url="/braggel" setnav={setnavdropdown} />
          )}
          {[Roles.ADMIN].includes(isAllowed) && (
            <NavbarLink name="Users" url="/users" setnav={setnavdropdown} />
          )}
          {[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL].includes(isAllowed) && (
            <NavbarLink name="Nieuws" url="/Nieuws" setnav={setnavdropdown} />
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
