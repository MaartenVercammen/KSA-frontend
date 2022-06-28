import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav';

const Header: React.FC = ()=>{
    return(
    <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
        <a
            className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none"
            href="/"
        >
            KSA-Site
        </a>
        <Navbar/>
    </header>
    );
}

export default Header