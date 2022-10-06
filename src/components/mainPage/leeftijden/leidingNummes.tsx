import React, { useEffect } from 'react';
import { leidingNummer } from '../../../types/index';
import Footer from '../../footer/footer';
import NavBar from '../../header/navbar';
import Card from '../../helper/card/card';

type Props = {
  nummers: Array<leidingNummer>;
  groep: string;
};

function LeidingNummes({ nummers, groep }: Props) {
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
                            && nummers.map((value: leidingNummer, index: number) => (
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

export default LeidingNummes;
