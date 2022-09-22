import React from "react";

const NavbarDashboard = () => {
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
            <a>Braggels</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Leiding nummers</a>
          </li>
          <li>
            <a>Bondsen</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
