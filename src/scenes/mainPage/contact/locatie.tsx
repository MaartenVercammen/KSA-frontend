import React from 'react';

import styles from './locatie.module.css';

function Locatie() {
  return (
    <div className={styles.container}>
      <h3>Waar kan je ons vinden?</h3>
      <a href="https://www.google.com/maps/place/Ksa+Aarschot/@50.985566,4.8416534,17z/data=!3m1!4b1!4m5!3m4!1s0x47c143501a3e8e41:0x3b8001192ca15fa1!8m2!3d50.9855579!4d4.8461356">
        Bekaflaan 65 3200 Aarschot
      </a>
    </div>
  );
}

export default Locatie;
