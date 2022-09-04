import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './css/index.css';
import Index from './components';

function App() {
    return (
        <>
            <main className="container mt-5">
                <Routes>
                    <Route path="/" element={<Index/>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
