import React, { useState, useEffect } from 'react';
import FileService from '../../../service/fileService';
import styles from './braggel.module.css';

function Braggel() {
  const [braggels, setbraggels] = useState<string[]>([]);
  const [specialBraggels, setspecialBraggels] = useState<string[]>([]);

  const getActiveBraggels = async () => {
    const res = await FileService.getBraggels('braggels');
    const { data } = res;
    setbraggels(data);
  };

  const getSpecialBraggels = async () => {
    const res = await FileService.getBraggels('specialebraggels');
    const { data } = res;
    setspecialBraggels(data);
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
      {braggels
        && braggels.map((braggel) => (
          <a
            key={braggel}
            target="_blank"
            href={`${process.env.API_URL}/pdf/braggels/${braggel}`}
            rel="noreferrer"
          >
            {braggel}
          </a>
        ))}
      {!braggels && <p>er zijn op dit moment geen braggels</p>}

      <h3>Speciale edities</h3>
      {specialBraggels
        && specialBraggels.map((braggel) => (
          <a
            key={braggel}
            target="_blank"
            href={`${process.env.API_URL}/pdf/specialebraggels/${braggel}`}
            rel="noreferrer"
          >
            {braggel}
          </a>
        ))}
      {!specialBraggels && <p>er zijn op dit moment geen braggels</p>}
    </div>
  );
}

export default Braggel;
