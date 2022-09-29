import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./css/index.css";
import Index from "./components/index";
import LeidingNummes from "./components/body/leidingNummes";
import Login from "./components/body/login";
import ProtectedRoutes from "./components/protectedRoutes";
import Dashboard from "./components/dashboard/dashboard";
import { Roles } from "./types";
import Logout from "./components/body/logout";

function App() {
  const setToken = (userToken: object) => {
    sessionStorage.setItem("user", JSON.stringify(userToken));
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route
            path="/leiders/Rubskes"
            element={
              <LeidingNummes
                groep="Rubskes"
                nummers={[
                  {
                    naam: "Floor Van Casteren",
                    number: "0499 20 10 60",
                    img: "/images/floor.webp",
                  },
                  {
                    naam: "Rosemarie Mas",
                    number: "0491 19 26 20",
                    img: "/images/rosemarie.webp",
                  },
                  {
                    naam: "Giel De Bont",
                    number: "0494 46 55 14",
                    img: "/images/giel.webp",
                  },
                  {
                    naam: "Charlotte Morlion",
                    number: "0493 20 95 72",
                    img: "/images/charlotte.webp",
                  },
                  {
                    naam: "Demi Jonckheere",
                    number: "0483 45 15 80",
                    img: "/images/demi.webp",
                  },
                ]}
              />
            }
          />
          <Route
            path="/leiders/Leeuwkes"
            element={
              <LeidingNummes
                groep="Leeuwkes"
                nummers={[
                  {
                    naam: "Nele Hermans",
                    number: "0472 06 42 54 ",
                    img: "/images/nele.webp",
                  },
                  {
                    naam: "Margot Somers",
                    number: "0470 82 72 58",
                    img: "/images/margot.webp",
                  },
                  {
                    naam: "Kato Willems",
                    number: "0498 06 93 51",
                    img: "/images/kato.webp",
                  },
                  {
                    naam: "Seppe Bellekens",
                    number: "0478 52 48 75",
                    img: "/images/seppe.webp",
                  },
                  {
                    naam: "Joeri Perdieus ",
                    number: "0468 20 50 08 ",
                    img: "/images/joeri.webp",
                  },
                  {
                    naam: "Marthe Seldeslachts",
                    number: "0472 63 42 63",
                    img: "/images/marthe.webp",
                  },
                ]}
              />
            }
          />
          <Route
            path="/leiders/Jonknapen"
            element={
              <LeidingNummes
                groep="Jongknapen"
                nummers={[
                  {
                    naam: "Joke Hermans",
                    number: "0491 20 88 08 ",
                    img: "/images/joke.webp",
                  },
                  {
                    naam: "Lore Willems",
                    number: "0488 33 72 33",
                    img: "/images/lore.webp",
                  },
                  {
                    naam: "Tuur Willems ",
                    number: "0468 33 61 46 ",
                    img: "/images/tuur.webp",
                  },
                  {
                    naam: "Leon Decoster",
                    number: "0468 27 29 10",
                    img: "/images/leon.webp",
                  },
                  {
                    naam: "Sean Oliviers",
                    number: "0486 11 44 03",
                    img: "/images/sean.webp",
                  },
                  {
                    naam: "Anne-Sofie Van Bael",
                    number: "0493 74 95 88",
                    img: "/images/anne-sofie.webp",
                  },
                ]}
              />
            }
          />
          <Route
            path="/leiders/Knapen"
            element={
              <LeidingNummes
                groep="Knapen"
                nummers={[
                  {
                    naam: "Ann-Sofie Milis",
                    number: "0497 22 68 47",
                    img: "/images/ann-sofie.webp",
                  },
                  {
                    naam: "Ruben Pauwels",
                    number: "0468 26 45 59",
                    img: "/images/ruben.webp",
                  },
                  {
                    naam: "Roos Debeys",
                    number: "0479 30 70 17",
                    img: "/images/roos.webp",
                  },
                ]}
              />
            }
          />
          <Route
            path="/leiders/Jonghernieuwers"
            element={
              <LeidingNummes
                groep="Jonghernieuwers"
                nummers={[
                  {
                    naam: "Daan Van Noten",
                    number: "0496 39 51 75",
                    img: "/images/daan.webp",
                  },
                  {
                    naam: "Finn Bogaerts",
                    number: "0479 01 98 66",
                    img: "/images/finn.webp",
                  },
                  {
                    naam: "Juul Schellens",
                    number: "0492 08 35 60",
                    img: "/images/juul.webp",
                  },
                ]}
              />
            }
          />
          <Route
            path="/leiders/Hernieuwers"
            element={
              <LeidingNummes
                groep="Hernieuwers"
                nummers={[
                  {
                    naam: "Kobe Holemans",
                    number: "0499 30 40 12",
                    img: "/images/kobe.webp",
                  },
                  {
                    naam: "Tjen Ooms",
                    number: "0470 39 44 72",
                    img: "/images/tjen.webp",
                  },
                  {
                    naam: "Luna Vervloessem",
                    number: "0473 98 97 90",
                    img: "/images/luna.webp",
                  },
                ]}
              />
            }
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            element={
              <ProtectedRoutes
                isAllowed={[Roles.ADMIN, Roles.GUEST, Roles.MODERATOR]}
                redirectPath="/"
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="logout" element={<Logout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
