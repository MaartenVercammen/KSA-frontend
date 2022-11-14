import React, { lazy } from 'react';

import styles from './leeftijden.module.css';

import rubskesLogo from '../../../images/rubskesLogo.webp';
import leeuwkesLogo from '../../../images/leeuwkesLogo.webp';
import jongknapenLogo from '../../../images/jongknapenLogo.webp';
import knapenLogo from '../../../images/knapenLogo.webp';
import jonghernieuwersLogo from '../../../images/jonghernieuwersLogo.webp';
import hernieuwersLogo from '../../../images/hernieuwersLogo.webp';

const LeeftijdBox = lazy(() => import('./leeftijdBox'));

function Leeftijden() {
  return (
    <div className={styles.container} id="leeftijden">
      <h1>Leeftijden</h1>
      <div className={styles.grid}>
        <LeeftijdBox
          name="Rubskes"
          img={rubskesLogo}
          startAge="3de kleuterklas"
          endAge="1ste leerjaar"
        />
        <LeeftijdBox
          name="Leeuwkes"
          img={leeuwkesLogo}
          startAge="2de leerjaar"
          endAge="3de leerjaar"
        />
        <LeeftijdBox
          name="Jonknapen"
          img={jongknapenLogo}
          startAge="4de leerjaar"
          endAge="6de leerjaar"
        />
        <LeeftijdBox
          name="Knapen"
          img={knapenLogo}
          startAge="1ste middelbaar"
          endAge="2de middelbaar"
        />
        <LeeftijdBox
          name="Jonghernieuwers"
          img={jonghernieuwersLogo}
          startAge="3ste middelbaar"
          endAge="4de middelbaar"
        />
        <LeeftijdBox
          name="Hernieuwers"
          img={hernieuwersLogo}
          startAge="5ste middelbaar"
          endAge="6de middelbaar"
        />
      </div>
    </div>
  );
}

export default Leeftijden;
