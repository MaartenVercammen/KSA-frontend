import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <>
            <main className="container mt-5">
                <Routes>
                    <Route path="/" element={<p>Test</p>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
