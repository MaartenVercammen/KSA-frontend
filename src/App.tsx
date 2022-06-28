import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import User from './components/user';

function App() {
    return (
        <>
            <Header/>
            <main className="container mt-5">
                <Routes>
                    <Route path="/"/>
                    <Route path="/user/*" element={<User/>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
