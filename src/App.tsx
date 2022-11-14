import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Groep, Roles } from './types';

import rubskesLogo from './images/rubskesLogo.webp';
import leeuwkesLogo from './images/leeuwkesLogo.webp';
import jongknapenLogo from './images/jongknapenLogo.webp';
import knapenLogo from './images/knapenLogo.webp';
import jonghernieuwersLogo from './images/jonghernieuwersLogo.webp';
import hernieuwersLogo from './images/hernieuwersLogo.webp';

const Dashboard = lazy(() => import('./scenes/dashboard/dashboard'));
const Logout = lazy(() => import('./components/helper/logout'));
const Index = lazy(() => import('./scenes'));
const LeidingNummers = lazy(() => import('./scenes/mainPage/leeftijden/leidingNummers'));
const Login = lazy(() => import('./components/login/login'));
const ProtectedRoutes = lazy(() => import('./components/helper/protectedRoutes'));
const Footer = lazy(() => import('./components/footer/footer'));
const UploadBraggels = lazy(() => import('./scenes/dashboard/braggel/uploadBraggels'));
const UserOverview = lazy(() => import('./scenes/dashboard/users/userOverview'));
const UpdateUser = lazy(() => import('./scenes/dashboard/users/updateUser'));
const CreateUser = lazy(() => import('./scenes/dashboard/users/createUser'));
const Posts = lazy(() => import('./scenes/dashboard/posts/posts'));
const AddPosts = lazy(() => import('./scenes/dashboard/posts/addPosts'));
const UpdatePost = lazy(() => import('./scenes/dashboard/posts/updatePost'));

function App() {
  const setToken = (userToken: object) => {
    sessionStorage.setItem('user', JSON.stringify(userToken));
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/leiders/Rubskes"
            element={(
              <LeidingNummers
                groep={{ naam: 'Rubskes', logo: rubskesLogo } as Groep}
                nummers={[
                  {
                    voornaam: 'Floor',
                    achternaam: 'Van Casteren',
                    number: '0499 20 10 60',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/floor.webp`,
                  },
                  {
                    voornaam: 'Rosemarie',
                    achternaam: 'Mas',
                    number: '0491 19 26 20',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/rosemarie.webp`,
                  },
                  {
                    voornaam: 'Giel',
                    achternaam: 'De Bont',
                    number: '0494 46 55 14',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/giel.webp`,
                  },
                  {
                    voornaam: 'Charlotte',
                    achternaam: 'Morlion',
                    number: '0493 20 95 72',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/charlotte.webp`,
                  },
                  {
                    voornaam: 'Demi',
                    achternaam: 'Jonckheere',
                    number: '0483 45 15 80',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/demi.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            path="/leiders/Leeuwkes"
            element={(
              <LeidingNummers
                groep={{ naam: 'Leeuwkes', logo: leeuwkesLogo } as Groep}
                nummers={[
                  {
                    voornaam: 'Nele',
                    achternaam: 'Hermans',
                    number: '0472 06 42 54 ',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/nele.webp`,
                  },
                  {
                    voornaam: 'Margot',
                    achternaam: ' Somers',
                    number: '0470 82 72 58',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/margot.webp`,
                  },
                  {
                    voornaam: 'Kato',
                    achternaam: 'Willems',
                    number: '0498 06 93 51',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/kato.webp`,
                  },
                  {
                    voornaam: 'Seppe',
                    achternaam: 'Bellekens',
                    number: '0478 52 48 75',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/seppe.webp`,
                  },
                  {
                    voornaam: 'Joeri',
                    achternaam: 'Perdieus',
                    number: '0468 20 50 08 ',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/joeri.webp`,
                  },
                  {
                    voornaam: 'Marthe',
                    achternaam: 'Seldeslachts',
                    number: '0472 63 42 63',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/marthe.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            path="/leiders/Jonknapen"
            element={(
              <LeidingNummers
                groep={{ naam: 'Jongknapen', logo: jongknapenLogo } as Groep}
                nummers={[
                  {
                    voornaam: 'Joke',
                    achternaam: 'Hermans',
                    number: '0491 20 88 08 ',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/joke.webp`,
                  },
                  {
                    voornaam: 'Lore',
                    achternaam: 'Willems',
                    number: '0488 33 72 33',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/lore.webp`,
                  },
                  {
                    voornaam: 'Tuur',
                    achternaam: 'Willems',
                    number: '0468 33 61 46 ',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/tuur.webp`,
                  },
                  {
                    voornaam: 'Leon',
                    achternaam: 'Decoster',
                    number: '0468 27 29 10',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/leon.webp`,
                  },
                  {
                    voornaam: 'Sean',
                    achternaam: 'Oliviers',
                    number: '0486 11 44 03',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/sean.webp`,
                  },
                  {
                    voornaam: 'Anne-Sofie',
                    achternaam: 'Van Bael',
                    number: '0493 74 95 88',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/anne-sofie.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            path="/leiders/Knapen"
            element={(
              <LeidingNummers
                groep={{ naam: 'Knapen', logo: knapenLogo } as Groep}
                nummers={[
                  {
                    voornaam: 'Ann-Sofie',
                    achternaam: 'Milis',
                    number: '0497 22 68 47',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/ann-sofie.webp`,
                  },
                  {
                    voornaam: 'Ruben',
                    achternaam: 'Pauwels',
                    number: '0468 26 45 59',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/ruben.webp`,
                  },
                  {
                    voornaam: 'Roos',
                    achternaam: 'Debeys',
                    number: '0479 30 70 17',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/roos.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            path="/leiders/Jonghernieuwers"
            element={(
              <LeidingNummers
                groep={
                  { naam: 'Jonghernieuwers', logo: jonghernieuwersLogo } as Groep
                }
                nummers={[
                  {
                    voornaam: 'Daan',
                    achternaam: 'Van Noten',
                    number: '0496 39 51 75',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/daan.webp`,
                  },
                  {
                    voornaam: 'Finn',
                    achternaam: 'Bogaerts',
                    number: '0479 01 98 66',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/finn.webp`,
                  },
                  {
                    voornaam: 'Juul',
                    achternaam: 'Schellens',
                    number: '0492 08 35 60',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/juul.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            path="/leiders/Hernieuwers"
            element={(
              <LeidingNummers
                groep={{ naam: 'Hernieuwers', logo: hernieuwersLogo } as Groep}
                nummers={[
                  {
                    voornaam: 'Kobe',
                    achternaam: 'Holemans',
                    number: '0499 30 40 12',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/kobe.webp`,
                  },
                  {
                    voornaam: 'Tjen',
                    achternaam: 'Ooms',
                    number: '0470 39 44 72',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/tjen.webp`,
                  },
                  {
                    voornaam: 'Luna',
                    achternaam: 'Vervloessem',
                    number: '0473 98 97 90',
                    img: `${process.env.IMAGE_UPLOAD_DIR}/luna.webp`,
                  },
                ]}
              />
            )}
          />
          <Route
            element={(
              <ProtectedRoutes
                isAllowed={[Roles.ADMIN, Roles.BRAGGEL, Roles.BONDS]}
                redirectPath="/"
              />
            )}
          >
            <Route path="/braggel" element={<Dashboard element={<UploadBraggels />} isAllowed={[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL]} redirect="/login" />} />
            <Route path="/users" element={<Dashboard element={<UserOverview />} isAllowed={[Roles.ADMIN]} redirect="/braggel" />} />
            <Route path="/users/update" element={<Dashboard element={<UpdateUser />} isAllowed={[Roles.ADMIN]} redirect="/braggel" />} />
            <Route path="/users/create" element={<Dashboard element={<CreateUser />} isAllowed={[Roles.ADMIN]} redirect="/braggel" />} />
            <Route path="/nieuws" element={<Dashboard element={<Posts />} isAllowed={[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL]} redirect="/braggel" />} />
            <Route path="/nieuws/update" element={<Dashboard element={<UpdatePost />} isAllowed={[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL]} redirect="/braggel" />} />
            <Route path="/nieuws/create" element={<Dashboard element={<AddPosts />} isAllowed={[Roles.ADMIN, Roles.BONDS, Roles.BRAGGEL]} redirect="/braggel" />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
