import React, { lazy } from 'react';

import styles from './contactInfo.module.css';

const Card = lazy(() => import('../../helper/card/card'));

function ContactInfo() {
  return (
    <div className={styles.container}>
      <h3>Hoofdleiding</h3>
      <div className={styles.grid}>
        <Card
          voornaam="Nele"
          achternaam="Hermans"
          nummer="0472064254"
          img="/images/nele.webp"
        />
        <Card
          voornaam="Kobe"
          achternaam="Holemans"
          nummer="0499304012"
          img="/images/kobe.webp"
        />
      </div>
    </div>
  );
}

export default ContactInfo;
