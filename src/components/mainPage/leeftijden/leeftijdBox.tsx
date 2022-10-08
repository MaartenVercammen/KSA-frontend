import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './leeftijdsBox.module.css';

type Props = {
  name: string;
  img: string;
  startAge: string;
  endAge: string;
};

function LeeftijdBox({
  name,
  img,
  startAge,
  endAge,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className={styles.box} onClick={() => navigate(`/leiders/${name}`)}>
      <img src={img} alt={`logo van de ${name}`} />
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>
          {startAge}
          -
          {endAge}
        </p>
      </div>
    </div>
  );
}

export default LeeftijdBox;
