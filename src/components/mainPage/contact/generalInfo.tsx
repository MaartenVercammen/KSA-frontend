import React from 'react';

import Socials from './socials';

import styles from './generalInfo.module.css';

function GeneralInfo() {
  return (
    <div className={styles.generalinfo}>
      <div>
        <h2>KSA aarschot</h2>
        <p>Elke zaterdag vanaf 14.00u, voor jongens en meisjes vanaf de 3de kleuterklas.</p>
      </div>
      <div>
        <h2>Vragen? mail ons</h2>
        <p>
          <a href="mailto:bonds@ksa-aarschot.be">Bonds@ksa-aarschot.be</a>
        </p>
      </div>
      <Socials />
    </div>
  );
}

export default GeneralInfo;
