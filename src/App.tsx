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
                    <Route path='/leiders/Rubskes' element={<LeidingNummes groep='Rubskes' nummers={[{naam: "joke", number:"048568247", img:"/public/images/rubskesLogo.png"}, {naam: "joke", number:"048568247",img:"/public/images/rubskesLogo.png"}, {naam: "joke", number:"048568247", img:"/public/images/rubskesLogo.png"}, {naam: "joke", number:"048568247", img:"/public/images/rubskesLogo.png"}, {naam: "joke", number:"048568247", img:"/public/images/rubskesLogo.png"}, {naam: "joke", number:"048568247", img:"/public/images/rubskesLogo.png"}]}/>} />
                    <Route path='/leiders/Leeuwkes' element={<div>Leeuwkes</div>} />
                    <Route path='/leiders/Jonknapen' element={<div>Jonknapen</div>} />
                    <Route path='/leiders/Knapen' element={<div>Knapen</div>} />
                    <Route path='/leiders/Jonghernieuwers' element={<div>Jonghernieuwers</div>} />
                    <Route path='/leiders/Hernieuwers' element={<div>Hernieuwers</div>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
