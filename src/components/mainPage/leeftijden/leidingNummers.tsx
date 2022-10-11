import React, { useEffect } from 'react';
import { Groep, LeidingNummer } from '../../../types';
import NavBar from '../../header/navbar';
import Card from '../../helper/card/card';

import styles from './leidingNummers.module.css';

type Props = {
  nummers: Array<LeidingNummer>;
  groep: Groep;
};

function LeidingNummers({ nummers, groep }: Props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log({ backgroundImage: `url(${groep.logo});` });

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
