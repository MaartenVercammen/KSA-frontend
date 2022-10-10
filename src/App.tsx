import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/index.css';
import Index from './components/index';
import LeidingNummers from './components/mainPage/leeftijden/leidingNummers';
import Login from './components/helper/login/login';
import ProtectedRoutes from './components/helper/protectedRoutes';
import Dashboard from './components/dashboard/dashboard';
import { Roles } from './types';
import Logout from './components/helper/logout';
import Footer from './components/footer/footer';

import rubskesLogo from './images/rubskesLogo.webp';
import leeuwkesLogo from './images/leeuwkesLogo.webp';
import jongknapenLogo from './images/jongknapenLogo.webp';
import knapenLogo from './images/knapenLogo.webp';
import jonghernieuwersLogo from './images/jonghernieuwersLogo.webp';
import hernieuwersLogo from './images/hernieuwersLogo.webp';
import annSofie from './images/ann-sofie.webp';
import anneSofie from './images/anne-sofie.webp';
import charlotte from './images/charlotte.webp';
import daan from './images/daan.webp';
import demi from './images/demi.webp';
import finn from './images/finn.webp';
import floor from './images/floor.webp';
import giel from './images/giel.webp';
import joeri from './images/joeri.webp';
import joke from './images/joke.webp';
import juul from './images/juul.webp';
import kato from './images/kato.webp';
import kobe from './images/kobe.webp';
import leon from './images/leon.webp';
import lore from './images/lore.webp';
import luna from './images/luna.webp';
import margot from './images/margot.webp';
import marthe from './images/marthe.webp';
import nele from './images/nele.webp';
import roos from './images/roos.webp';
import rosemarie from './images/rosemarie.webp';
import ruben from './images/ruben.webp';
import sean from './images/sean.webp';
import seppe from './images/seppe.webp';
import tjen from './images/tjen.webp';
import tuur from './images/tuur.webp';

function App() {
  const setToken = (userToken: object) => {
    sessionStorage.setItem('user', JSON.stringify(userToken));
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route
            path="/leiders/Rubskes"
            element={(
              <LeidingNummers
                groep={{ naam: 'Rubskes', logo: rubskesLogo }}
                nummers={[
                  {
                    voornaam: 'Floor',
                    achternaam: 'Van Casteren',
                    number: '0499 20 10 60',
                    img: floor,
                  },
                  {
                    voornaam: 'Rosemarie',
                    achternaam: 'Mas',
                    number: '0491 19 26 20',
                    img: rosemarie,
                  },
                  {
                    voornaam: 'Giel',
                    achternaam: 'De Bont',
                    number: '0494 46 55 14',
                    img: giel,
                  },
                  {
                    voornaam: 'Charlotte',
                    achternaam: 'Morlion',
                    number: '0493 20 95 72',
                    img: charlotte,
                  },
                  {
                    voornaam: 'Demi',
                    achternaam: 'Jonckheere',
                    number: '0483 45 15 80',
                    img: demi,
                  },
                ]}
              />
                          )}
          />
          <Route
            path="/leiders/Leeuwkes"
            element={(
              <LeidingNummers
                groep={{ naam: 'Leeuwkes', logo: leeuwkesLogo }}
                nummers={[
                  {
                    voornaam: 'Nele',
                    achternaam: 'Hermans',
                    number: '0472 06 42 54 ',
                    img: nele,
                  },
                  {
                    voornaam: 'Margot',
                    achternaam: ' Somers',
                    number: '0470 82 72 58',
                    img: margot,
                  },
                  {
                    voornaam: 'Kato',
                    achternaam: 'Willems',
                    number: '0498 06 93 51',
                    img: kato,
                  },
                  {
                    voornaam: 'Seppe',
                    achternaam: 'Bellekens',
                    number: '0478 52 48 75',
                    img: seppe,
                  },
                  {
                    voornaam: 'Joeri',
                    achternaam: 'Perdieus',
                    number: '0468 20 50 08 ',
                    img: joeri,
                  },
                  {
                    voornaam: 'Marthe',
                    achternaam: 'Seldeslachts',
                    number: '0472 63 42 63',
                    img: marthe,
                  },
                ]}
              />
                          )}
          />
          <Route
            path="/leiders/Jonknapen"
            element={(
              <LeidingNummers
                groep={{ naam: 'Jongknapen', logo: jongknapenLogo }}
                nummers={[
                  {
                    voornaam: 'Joke',
                    achternaam: 'Hermans',
                    number: '0491 20 88 08 ',
                    img: joke,
                  },
                  {
                    voornaam: 'Lore',
                    achternaam: 'Willems',
                    number: '0488 33 72 33',
                    img: lore,
                  },
                  {
                    voornaam: 'Tuur',
                    achternaam: 'Willems',
                    number: '0468 33 61 46 ',
                    img: tuur,
                  },
                  {
                    voornaam: 'Leon',
                    achternaam: 'Decoster',
                    number: '0468 27 29 10',
                    img: leon,
                  },
                  {
                    voornaam: 'Sean',
                    achternaam: 'Oliviers',
                    number: '0486 11 44 03',
                    img: sean,
                  },
                  {
                    voornaam: 'Anne-Sofie',
                    achternaam: 'Van Bael',
                    number: '0493 74 95 88',
                    img: anneSofie,
                  },
                ]}
              />
                          )}
          />
          <Route
            path="/leiders/Knapen"
            element={(
              <LeidingNummers
                groep={{ naam: 'Knapen', logo: knapenLogo }}
                nummers={[
                  {
                    voornaam: 'Ann-Sofie',
                    achternaam: 'Milis',
                    number: '0497 22 68 47',
                    img: annSofie,
                  },
                  {
                    voornaam: 'Ruben',
                    achternaam: 'Pauwels',
                    number: '0468 26 45 59',
                    img: ruben,
                  },
                  {
                    voornaam: 'Roos',
                    achternaam: 'Debeys',
                    number: '0479 30 70 17',
                    img: roos,
                  },
                ]}
              />
                          )}
          />
          <Route
            path="/leiders/Jonghernieuwers"
            element={(
              <LeidingNummers
                groep={{ naam: 'Jonghernieuwers', logo: jonghernieuwersLogo }}
                nummers={[
                  {
                    voornaam: 'Daan',
                    achternaam: 'Van Noten',
                    number: '0496 39 51 75',
                    img: daan,
                  },
                  {
                    voornaam: 'Finn',
                    achternaam: 'Bogaerts',
                    number: '0479 01 98 66',
                    img: finn,
                  },
                  {
                    voornaam: 'Juul',
                    achternaam: 'Schellens',
                    number: '0492 08 35 60',
                    img: juul,
                  },
                ]}
              />
                          )}
          />
          <Route
            path="/leiders/Hernieuwers"
            element={(
              <LeidingNummers
                groep={{ naam: 'Hernieuwers', logo: hernieuwersLogo }}
                nummers={[
                  {
                    voornaam: 'Kobe',
                    achternaam: 'Holemans',
                    number: '0499 30 40 12',
                    img: kobe,
                  },
                  {
                    voornaam: 'Tjen',
                    achternaam: 'Ooms',
                    number: '0470 39 44 72',
                    img: tjen,
                  },
                  {
                    voornaam: 'Luna',
                    achternaam: 'Vervloessem',
                    number: '0473 98 97 90',
                    img: luna,
                  },
                ]}
              />
                          )}
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            element={(
              <ProtectedRoutes
                isAllowed={[Roles.ADMIN, Roles.BRAGGEL, Roles.BONDS]}
                redirectPath="/"
              />
                          )}
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="logout" element={<Logout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
