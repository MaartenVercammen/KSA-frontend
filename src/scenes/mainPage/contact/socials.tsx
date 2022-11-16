import React from 'react';

import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';

import styles from './socials.module.css';

function Socials() {
  return (
    <>
      <h2>Volg ons op onze socials</h2>
      <div className={styles.row}>
        <a
          href="https://www.facebook.com/KSA.Aarschot"
          rel="noreferrer"
          target="_blank"
          aria-label="link naar Facebook van KSA Aarschot"
        >
          <Facebook className={styles.facebook} />
        </a>
        <a
          href="https://www.instagram.com/ksa_aarschot"
          rel="noreferrer"
          target="_blank"
          aria-label="link naar Facebook van KSA Aarschot"
        >
          <Instagram className={styles.instagram} />
        </a>
      </div>
    </>
  );
}

export default Socials;
