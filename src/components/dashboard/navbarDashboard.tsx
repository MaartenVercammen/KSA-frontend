import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authTab from './tabAuth';

import styles from './navbarDashboard.module.css';

type Props = {
  setactivetab: (index: number) => void;
};

function NavbarDashboard({ setactivetab }: Props) {
  const [navdropdown, setnavdropdown] = useState<boolean>(false);

  const changetab = (index: number) => {
    setactivetab(index);
  };

  return (
    <div className={styles['dashboard-nav']}>
      <nav>
        <p>DashBoard</p>
        <label htmlFor="burger" className={styles.hamburger}>
          ☰
        </label>
        <input
          type="checkbox"
          name="burger"
          id="burger"
          checked={navdropdown}
          onChange={() => setnavdropdown(true)}
        />
        <ul>
          {authTab(0) && (
            <li>
              <a
                onClick={() => {
                  changetab(0);
                  setnavdropdown(false);
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
                  setnavdropdown(false);
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
                  setnavdropdown(false);
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
