import React, { lazy } from 'react';

import styles from './contact.module.css';

const ContactInfo = lazy(() => import('./contactInfo'));
const GeneralInfo = lazy(() => import('./generalInfo'));
const Locatie = lazy(() => import('./locatie'));

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
