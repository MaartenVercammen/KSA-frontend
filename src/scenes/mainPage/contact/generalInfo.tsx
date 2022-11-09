import React, { lazy } from 'react';

import styles from './generalInfo.module.css';

const Socials = lazy(() => import('./socials'));

function GeneralInfo() {
  return (
    <div className={styles.generalinfo}>
      <h2>KSA aarschot</h2>
      <p>Elke zaterdag vanaf 14.00u, voor jongens en meisjes vanaf de 3de kleuterklas.</p>
      <h2>Vragen? mail ons</h2>
      <p>
        <a href="mailto:bonds@ksa-aarschot.be">Bonds@ksa-aarschot.be</a>
      </p>
      <Socials />
    </div>
  );
}

export default GeneralInfo;
