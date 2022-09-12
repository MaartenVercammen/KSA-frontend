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
                    <Route path='/leiders/Rubskes' element={<LeidingNummes groep='Rubskes' nummers={[{naam: "Floor Van Casteren", number:"0499 20 10 60", img:"/images/rubskesLogo.png"}, {naam: "Rosemarie Mas", number:"0491 19 26 20",img:"/images/rubskesLogo.png"}, {naam: "Margot Somers", number:"0470 82 72 58", img:"/images/rubskesLogo.png"}, {naam: "Giel De Bont", number:"0494 46 55 14", img:"/images/rubskesLogo.png"}, {naam: "Charlotte Morlion", number:"0493 20 95 72", img:"/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Leeuwkes' element={<LeidingNummes groep='Leeuwkes' nummers={[{naam: "Nele Hermans", number:"0472 06 42 54 ", img:"/images/nele.jpg"}, {naam: "Margot Somers", number:"0470 82 72 58",img:"/images/rubskesLogo.png"}, {naam: "Kato Willems", number:"0498 06 93 51", img:"/images/rubskesLogo.png"}, {naam: "Seppe Bellekens", number:"0478 52 48 75", img:"/images/rubskesLogo.png"}, {naam: "Joeri Perdieus ", number:"0468 20 50 08 ", img:"/images/rubskesLogo.png"}, {naam: "Marthe Seldeslachts", number:"0472 63 42 63", img:"/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Jonknapen' element={<LeidingNummes groep='Jongknapen' nummers={[{naam: "Joke Hermans", number:"0491 20 88 08 ", img:"/images/rubskesLogo.png"}, {naam: "Lore Willems", number:"0488 33 72 33",img:"/images/rubskesLogo.png"}, {naam: "Tuur Willems ", number:"0468 33 61 46 ", img:"/images/rubskesLogo.png"}, {naam: "Leon Decoster", number:"0468 27 29 10", img:"/images/rubskesLogo.png"}, {naam: "Sean Oliviers", number:"0486 11 44 03", img:"/images/rubskesLogo.png"}, {naam: "Anne-Sophie Van Bael", number:"0493 74 95 88", img:"/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Knapen' element={<LeidingNummes groep='Knapen' nummers={[{naam: "Ann-Sofie Milis", number:"0497 22 68 47", img:"/images/rubskesLogo.png"}, {naam: "Ruben Pauwels", number:"0468 26 45 59",img:"/images/rubskesLogo.png"}, {naam: "Roos Debeys", number:"0479 30 70 17", img:"/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Jonghernieuwers'element={<LeidingNummes groep='Jonghernieuwers' nummers={[{naam: "Daan Van Noten", number:"0496 39 51 75", img:"/images/rubskesLogo.png"}, {naam: "Finn Bogaerts", number:"0479 01 98 66",img:"/images/rubskesLogo.png"}, {naam: "Juul Schellens", number:"0492 08 35 60", img:"/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Hernieuwers' element={<LeidingNummes groep='Herniewers' nummers={[{naam: "Kobe Holemans", number:"0499 30 40 12", img:"/images/koeb.png"}, {naam: "Tjen Ooms", number:"0470 39 44 72",img:"/images/rubskesLogo.png"}, {naam: "Luna Vervloessem", number:"0473 98 97 90", img:"/images/rubskesLogo.png"}]}/>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
