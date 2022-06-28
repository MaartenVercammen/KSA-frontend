import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return(
    <nav>
        <ul className="nav justify-content-center">
            <li>
                <Link to="/" className="nav-link px-4 fs-5 text-white">
                    Overview
                </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;