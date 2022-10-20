import React from 'react';
import { Link } from 'react-router-dom';
import authTab from './tabAuth';

import styles from './navbarDashboard.module.css';

type Props = {
  setactivetab: (index: number) => void;
};

function NavbarDashboard({ setactivetab }: Props) {
  const changetab = (index: number) => {
    setactivetab(index);
  };

  return (
    <div className={styles.navbar}>
      <span>
        Dashboard
      </span>
      <input type="checkbox" id="navbar-toggle" />
      <label className={styles['toggle-button']} htmlFor="navbar-toggle"><i /></label>
      <nav className={styles.menu}>
        <ul>
          {authTab(0) && (
            <li>
              <a
                onClick={() => {
                  changetab(0);
                }}
              >
                Braggels
              </a>
            </li>
          )}
          {authTab(1) && (
            <li>
              <a
                onClick={() => {
                  changetab(1);
                }}
              >
                Users
              </a>
            </li>
          )}
          {authTab(4) && (
            <li>
              <a
                onClick={() => {
                  changetab(4);
                }}
              >
                Nieuws
              </a>
            </li>
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
