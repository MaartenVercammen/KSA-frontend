import React from 'react';
import LeeftijdBox from './leeftijdBox';
import './leeftijden.css';

function Leeftijden() {
  return (
    <div className="leeftijden" id="leeftijden">
      <h1>Leeftijden</h1>
      <div className="leeftijden-container">
        <LeeftijdBox
          name="Rubskes"
          img="./images/rubskesLogo.webp"
          startAge="3de kleuterklas"
          endAge="1ste leerjaar"
        />
        <LeeftijdBox
          name="Leeuwkes"
          img="./images/leeuwkesLogo.webp"
          startAge="2de leerjaar"
          endAge="3de leerjaar"
        />
        <LeeftijdBox
          name="Jonknapen"
          img="./images/jongknapenLogo.webp"
          startAge="4de leerjaar"
          endAge="6de leerjaar"
        />
        <LeeftijdBox
          name="Knapen"
          img="./images/knapenLogo.webp"
          startAge="1ste middelbaar"
          endAge="2de middelbaar"
        />
        <LeeftijdBox
          name="Jonghernieuwers"
          img="./images/jonghernieuwersLogo.webp"
          startAge="3ste middelbaar"
          endAge="4de middelbaar"
        />
        <LeeftijdBox
          name="Hernieuwers"
          img="./images/hernieuwersLogo.webp"
          startAge="5ste middelbaar"
          endAge="6de middelbaar"
        />
      </div>
    </div>
  );
}

export default Leeftijden;
