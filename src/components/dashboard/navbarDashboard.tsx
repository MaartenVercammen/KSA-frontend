import React from "react";

type Props = {
  setactivetab: (index: number) => void;
};

const NavbarDashboard = ({ setactivetab }: Props) => {
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
        <input type="checkbox" name="burger" id="burger" />
        <ul>
          <li>
            <a onClick={(e) => changetab(0)}>Braggels</a>
          </li>
          <li>
            <a onClick={(e) => changetab(1)}>Users</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
