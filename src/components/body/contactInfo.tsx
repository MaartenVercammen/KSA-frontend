import React from "react";
import Card from "./card";

const ContactInfo = () => {
  return (
    <div className="contact-info">
  
      <h3>Hoofdleiding</h3>
      <ul>
        <li>
          <Card naam="Nele Hermans" nummer="0485681274" img="/images/rubskesLogo.png"/>
        </li>
        <li>
          <Card naam="Kobe Holemens" nummer="0485681274" img="/images/rubskesLogo.png"/>
        </li>
      </ul>
      <p><h3>Mail:</h3> 
        <a href="mailto:bonds@ksa-aarschot.be">Bonds@ksa-aarschot.be</a>
      </p>
    </div>
  );
};

export default ContactInfo;
