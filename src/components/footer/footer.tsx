import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <p>
        &#169; 2015 KSA Aarschot -
        {' '}
        <a href="mailto:info@ksa-aarschot.be">&#9993; info@ksa-aarschot.be</a>
        {' '}
        -
        {' '}
        <a href="/login">&#9881; beheer</a>
      </p>
    </footer>
  );
}

export default Footer;
