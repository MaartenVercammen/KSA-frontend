import React, { useEffect } from 'react';
import { LeidingNummer, Groep } from '../../../types';
import NavBar from '../../header/navbar';
import Card from '../../helper/card/card';

type Props = {
  nummers: Array<LeidingNummer>;
  groep: Groep;
};

function LeidingNummers({ nummers, groep }: Props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="leidingnummers">
      <div className="groep-container">
        <h1 className="groep">{groep.naam}</h1>
        <img
          src={groep.logo}
          alt={`logo van groep ${groep.naam}`}
        />
      </div>
      <NavBar />
      <div className="groep-data">
        <ul>
          {nummers
                            && nummers.map((value: LeidingNummer) => (
                              <li>
                                <Card
                                  nummer={value.number}
                                  img={value.img}
                                  voornaam={value.voornaam}
                                  achternaam={value.achternaam}
                                />
                              </li>
                            ))}
        </ul>
      </div>
    </div>
  );
}

export default LeidingNummers;
