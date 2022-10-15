import React, { useEffect } from 'react';
import { LeidingNummer } from '../../../types';
import NavBar from '../../header/navbar';
import Card from '../../helper/card/card';

type Props = {
  nummers: Array<LeidingNummer>;
  groep: string;
};

function LeidingNummers({ nummers, groep }: Props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="leidingnummers">
      <div className="groep-container">
        <h1 className="groep">{groep}</h1>
        <img
          src={`/images/${groep.toLocaleLowerCase()}Logo.webp`}
          alt={`logo van groep ${groep}`}
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
