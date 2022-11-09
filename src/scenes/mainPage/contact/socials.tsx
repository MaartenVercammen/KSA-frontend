import React from 'react';

import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';

import styles from './socials.module.css';

function Socials() {
  return (
    <>
      <h2>Volg ons op onze socials</h2>
      <div className={styles.row}>
        <a href="https://www.facebook.com/KSA.Aarschot">
          <Facebook className={`${styles.fa} ${styles['fa-facebook']}`} />
        </a>
        <a href="src/scenes/mainPage/contact/socials">
          <Instagram className={`${styles.fa} ${styles['fa-instagram']}`} />
        </a>
      </div>
    </>
  );
}

export default Socials;
