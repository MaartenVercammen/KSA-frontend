import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './navbarLink';

type Props = {
  isAllowed: boolean;
};

function NavbarDashboard({ isAllowed }: Props) {
  const [navdropdown, setnavdropdown] = useState<boolean>(false);

  return (
    <div className="dashboard-nav">
      <nav>
        <p>DashBoard</p>
        <label htmlFor="burger" className="hamburger">
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
          {isAllowed && (
            <NavbarLink name="Braggel" url="/users" setnav={setnavdropdown} />
          )}
          {isAllowed && (
            <NavbarLink name="Users" url="/users" setnav={setnavdropdown} />
          )}
          {isAllowed && (
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
