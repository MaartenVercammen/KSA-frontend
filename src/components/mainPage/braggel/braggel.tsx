import React, { useEffect, useState } from 'react';
import { Magazine as IMagazine, MagazineTypes } from '../../../types';
import MagazineService from '../../../service/magazineService';
import styles from './braggel.module.css';

function Braggel() {
  const [monthlies, setMonthlies] = useState<IMagazine[]>([]);
  const [specials, setSpecials] = useState<IMagazine[]>([]);

  const getActiveBraggels = async () => {
    const res = await MagazineService.getAll(MagazineTypes.MONTHLY);
    setMonthlies(res);
  };

  const getSpecialBraggels = async () => {
    const res = await MagazineService.getAll(MagazineTypes.SPECIAL);
    setSpecials(res);
  };

  const getBragels = () => {
    getActiveBraggels();
    getSpecialBraggels();
  };

  useEffect(() => {
    getBragels();
  }, []);

  return (
    <div className={styles.container} id="braggel">
      <h1>Braggel</h1>
      <p>
        <i>Braggel</i>
        {' '}
        is de naam van ons maandelijks tijdschriftje. Ben je
        lid bij KSA Aarschot, dan krijg jij hem maandelijks in jouw mailbox.
      </p>
      <p>
        Hieronder vind je een overzicht van de beschikbare digitale edities.
        Is een maand niet zichtbaar? Helaas, dan staat de editie voor die
        maand nog niet online. Naast de maandelijkse edities, kan je hier ook
        de speciallekes, zoals onze Startbraggel voor nieuwe KSA&apos;(st)ers en
        onze Kampbraggel terugvinden. Alvast veel leesplezier!
      </p>
      <h2>Maandelijkse edities</h2>
      {monthlies
        && monthlies.map(({ id, title, path }) => (
          <a
            key={id}
            target="_blank"
            href={`${process.env.BASE_URL}${path}`}
            rel="noreferrer"
          >
            {title}
          </a>
        ))}
      {monthlies.length === 0 && <p>er zijn op dit moment geen braggels</p>}

      <h3>Speciale edities</h3>
      {specials
        && specials.map(({ id, title, path }) => (
          <a
            key={id}
            target="_blank"
            href={`${process.env.BASE_URL}${path}`}
            rel="noreferrer"
          >
            {title}
          </a>
        ))}
      {specials.length === 0 && <p>er zijn op dit moment geen braggels</p>}
    </div>
  );
}

export default Braggel;
