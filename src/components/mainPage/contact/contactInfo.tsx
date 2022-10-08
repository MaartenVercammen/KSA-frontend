import React from 'react';
import Card from '../../helper/card/card';

import styles from './contactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles['contact-info']}>
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
}

export default ContactInfo;
