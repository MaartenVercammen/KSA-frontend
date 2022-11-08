import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import AuthService from '../../../service/authService';

import styles from './login.module.css';

type Props = {
  setToken: (user: object) => void;
};

function Login({ setToken }: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const navigate = useNavigate();
  const alert = useAlert();

  if (sessionStorage.getItem('user') != null) {
    return <Navigate to="/dashboard" />;
  }

  const login = async () => {
    try {
      if (form.current) {
        const { type, user } = await AuthService.login(new FormData(form.current));
        if (type === 'valid') {
          setToken(user);
          navigate('/braggel');
        }
      }
    } catch (err) {
      alert.show('Invalid input');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-container']}>
        <h1>login</h1>
        <form onSubmit={handleSubmit} ref={form}>
          <div>
            <label htmlFor="email">email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className={styles['login-submit-container']}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
