import React, { lazy, useEffect } from 'react';
import { Groep, LeidingNummer } from '../../../types';

import styles from './leidingNummers.module.css';

const NavBar = lazy(() => import('../../../components/navbar/navbar'));
const Card = lazy(() => import('../../../components/card/card'));

type Props = {
  nummers: Array<LeidingNummer>;
  groep: Groep;
};

function LeidingNummers({ nummers, groep }: Props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <header className={styles.header} style={{ backgroundImage: `url(${groep.logo})` }}>
        <h1>{groep.naam}</h1>
      </header>
      <NavBar />
      <div className={styles.grid}>
        {nummers
          && nummers.map((value: LeidingNummer) => (
            <Card
              key={value.number}
              nummer={value.number}
              img={value.img}
              voornaam={value.voornaam}
              achternaam={value.achternaam}
            />
          ))}
      </div>
    </>
  );
}

export default LeidingNummers;
