import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import UserOverview from './components/user/overview';
import { AxiosResponse } from 'axios';
import { user } from './types';
import UserService from './services/userService';
import AddUser from './components/user/adduser';

function App() {
    return (
        <>
            <Header/>
            <main className="container mt-5">
                <Routes>
                    <Route path="/" element={<UserOverview/>} />
                    <Route path="/user/add" element={<AddUser/>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
