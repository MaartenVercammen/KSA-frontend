import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img
        src="/images/groepsfoto.webp"
        className="headerImg"
        alt="groepsfoto bij de formatie"
      />
      <img
        src="/images/logo.png"
        className="logo"
        alt="logo van KSA aarschot"
      />
    </header>
  );
};

export default Header;
