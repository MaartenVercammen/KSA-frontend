import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  setactivetab: (index: number) => void;
};

const NavbarDashboard = ({ setactivetab }: Props) => {
  const [navdropdown, setnavdropdown] = useState<boolean>(false);

  const changetab = (index: number) => {
    setactivetab(index);
  };

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
          onChange={(e) => setnavdropdown(true)}
        />
        <ul>
          <li>
            <a
              onClick={(e) => {
                changetab(0);
                setnavdropdown(false);
              }}
            >
              Braggels
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                changetab(1);
                setnavdropdown(false);
              }}
            >
              Users
            </a>
          </li>
          <li>
            <Link to={"/"}>Site</Link>
          </li>
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
