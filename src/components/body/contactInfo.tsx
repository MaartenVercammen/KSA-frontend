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
            nummer="0472064254"
            img="/images/nele.jpg"
          />
        </li>
        <li>
          <Card
            naam="Kobe Holemens"
            nummer="0499304012"
            img="/images/kobe.jpg"
          />
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
