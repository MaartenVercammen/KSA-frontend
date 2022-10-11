import React from 'react';

import styles from './card.module.css';

type Props = {
  img: string;
  voornaam: string;
  achternaam: string;
  nummer: string;
};

function Card({
  img,
  voornaam,
  achternaam,
  nummer,
}: Props) {
  return (
    <div className={styles.card}>
      <img src={img} alt="Avatar" />
      <h3>{`${voornaam} ${achternaam}`}</h3>
      <p>
        tel:
        <a href={`tel:${nummer}`}>{nummer}</a>
      </p>
    </div>
  );
}
export default Card;
