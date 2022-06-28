import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserOverview from './userOverview';

const User: React.FC = () => {
    return (
        <>
            <main className="container mt-5">
                <Routes>
                    <Route path='/overview' element={<UserOverview/>}/>
                </Routes>
            </main>
        </>
    );
}

export default User;
