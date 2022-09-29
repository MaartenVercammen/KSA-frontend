import React, { useEffect } from "react";
import Card from "../../helper/card/card";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      <h3>Hoofdleiding</h3>
      <ul>
        <li>
          <Card
            voornaam="Nele"
            achternaam="Hermans"
            nummer="0472064254"
            img="/images/nele.webp"
          />
        </li>
        <li>
          <Card
            voornaam="Kobe"
            achternaam="Holemans"
            nummer="0499304012"
            img="/images/kobe.webp"
          />
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
