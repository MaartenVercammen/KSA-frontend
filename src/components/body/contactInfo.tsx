import React, { useEffect } from "react";
import Card from "./card";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      <h3>Hoofdleiding</h3>
      <ul>
        <li>
          <Card
            naam="Nele Hermans"
            nummer="0485681274"
            img="/images/rubskesLogo.png"
          />
        </li>
        <li>
          <Card
            naam="Kobe Holemens"
            nummer="0485681274"
            img="/images/rubskesLogo.png"
          />
        </li>
      </ul>
      <h3>Mail:</h3>
      <p>
        <a href="mailto:bonds@ksa-aarschot.be">Bonds@ksa-aarschot.be</a>
      </p>
    </div>
  );
};

export default ContactInfo;
