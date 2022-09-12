import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './css/index.css';
import Index from './components';
import LeidingNummes from './components/body/leidingNummes';

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/*" element={<Index/>} />
                    <Route path='/leiders/Rubskes' element={<LeidingNummes groep='Rubskes' nummers={[{naam: "Floor Van Casteren", number:"0499 20 10 60", img:"/images/floor.jpg"}, {naam: "Rosemarie Mas", number:"0491 19 26 20",img:"/images/rosemarie.jpg"}, {naam: "Giel De Bont", number:"0494 46 55 14", img:"/images/giel.jpg"}, {naam: "Charlotte Morlion", number:"0493 20 95 72", img:"/images/charlotte.jpg"},{naam: "Demi Jonckheere", number:"0483 45 15 80", img:"/images/demi.jpg"}]}/>} />
                    <Route path='/leiders/Leeuwkes' element={<LeidingNummes groep='Leeuwkes' nummers={[{naam: "Nele Hermans", number:"0472 06 42 54 ", img:"/images/nele.jpg"}, {naam: "Margot Somers", number:"0470 82 72 58",img:"/images/margot.jpg"}, {naam: "Kato Willems", number:"0498 06 93 51", img:"/images/kato.jpg"}, {naam: "Seppe Bellekens", number:"0478 52 48 75", img:"/images/seppe.jpg"}, {naam: "Joeri Perdieus ", number:"0468 20 50 08 ", img:"/images/joeri.jpg"}, {naam: "Marthe Seldeslachts", number:"0472 63 42 63", img:"/images/marthe.jpg"}]}/>} />
                    <Route path='/leiders/Jonknapen' element={<LeidingNummes groep='Jongknapen' nummers={[{naam: "Joke Hermans", number:"0491 20 88 08 ", img:"/images/joke.jpg"}, {naam: "Lore Willems", number:"0488 33 72 33",img:"/images/lore.jpg"}, {naam: "Tuur Willems ", number:"0468 33 61 46 ", img:"/images/tuur.jpg"}, {naam: "Leon Decoster", number:"0468 27 29 10", img:"/images/leon.jpg"}, {naam: "Sean Oliviers", number:"0486 11 44 03", img:"/images/sean.jpg"}, {naam: "Anne-Sofie Van Bael", number:"0493 74 95 88", img:"/images/anne-sofie.jpg"}]}/>} />
                    <Route path='/leiders/Knapen' element={<LeidingNummes groep='Knapen' nummers={[{naam: "Ann-Sofie Milis", number:"0497 22 68 47", img:"/images/ann-sofie.jpg"}, {naam: "Ruben Pauwels", number:"0468 26 45 59",img:"/images/ruben.jpg"}, {naam: "Roos Debeys", number:"0479 30 70 17", img:"/images/roos.jpg"}]}/>} />
                    <Route path='/leiders/Jonghernieuwers'element={<LeidingNummes groep='Jonghernieuwers' nummers={[{naam: "Daan Van Noten", number:"0496 39 51 75", img:"/images/daan.jpg"}, {naam: "Finn Bogaerts", number:"0479 01 98 66",img:"/images/finn.jpg"}, {naam: "Juul Schellens", number:"0492 08 35 60", img:"/images/juul.jpg"}]}/>} />
                    <Route path='/leiders/Hernieuwers' element={<LeidingNummes groep='Hernieuwers' nummers={[{naam: "Kobe Holemans", number:"0499 30 40 12", img:"/images/kobe.jpg"}, {naam: "Tjen Ooms", number:"0470 39 44 72",img:"/images/tjen.jpg"}, {naam: "Luna Vervloessem", number:"0473 98 97 90", img:"/images/luna.jpg"}]}/>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
