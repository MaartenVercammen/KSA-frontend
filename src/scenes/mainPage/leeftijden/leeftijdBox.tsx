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
    <div
      className={styles.box}
      style={{ backgroundImage: `url(${img})` }}
      role="link"
      onClick={() => navigate(`/leiders/${name}`)}
      tabIndex={0}
    >
      <h4>{name}</h4>
      <p>{`${startAge}-${endAge}`}</p>
    </div>
  );
}

export default LeeftijdBox;