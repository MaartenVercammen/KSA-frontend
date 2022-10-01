import React, { useState } from "react";

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
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
