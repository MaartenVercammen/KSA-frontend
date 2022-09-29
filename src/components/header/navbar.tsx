import React from "react";
import { HashLink } from "react-router-hash-link";
import "./header.css";

const NavBar = () => {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav>
      <p>
        <HashLink smooth to="/#top">
          KSA Aarschot
        </HashLink>
      </p>
      <label htmlFor="burger" className="hamburger">
        ☰
      </label>
      <input type="checkbox" name="burger" id="burger" />
      <ul>
        <li>
          <HashLink smooth to="/#news" scroll={scrollWithOffset}>
            News
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#braggel" scroll={scrollWithOffset}>
            Braggel
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#leeftijden" scroll={scrollWithOffset}>
            Leeftijden
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" scroll={scrollWithOffset}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
