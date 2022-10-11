import React from 'react';
import ContactInfo from './contactInfo';
import GeneralInfo from './generalInfo';
import Locatie from './locatie';

import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      <div className={styles.grid}>
        <ContactInfo />
        <GeneralInfo />
      </div>
      <Locatie />
    </div>
  );
}

export default Contact;
