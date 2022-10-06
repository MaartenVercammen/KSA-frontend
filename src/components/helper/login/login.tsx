import React, { useState, useEffect } from 'react';
import UserService from '../../../service/userservice';
import { Navigate, useNavigate } from 'react-router-dom';
import './login.css';
import { useAlert } from 'react-alert';

type Props = {
    setToken: (user: object) => void;
};

const Login = ({ setToken }: Props) => {
    const navigate = useNavigate();
    const alert = useAlert();

    if (sessionStorage.getItem('user') != undefined) {
        return <Navigate to={'/dashboard'} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await UserService.login(e.target.email.value, e.target.password.value);
        if (res.data.type == 'valid') {
            setToken(res.data.user);
            navigate('/dashboard');
        } else {
            alert.show('Invalid input');
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1>login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">email</label>
                        <input name="email" type="email"></input>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input name="password" type="password"></input>
                    </div>
                    <div className="login-submit-container">
                        <input type="submit" value="login"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
