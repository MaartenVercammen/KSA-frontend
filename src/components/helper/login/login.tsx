import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import UserService from '../../../service/userservice';
import { User } from '../../../types';

import styles from './login.module.css';

type Props = {
  setToken: (user: object) => void;
};

function Login({ setToken }: Props) {
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const navigate = useNavigate();
  const alert = useAlert();

  if (sessionStorage.getItem('user') != null) {
    return <Navigate to="/dashboard" />;
  }

  const login = async () => {
    try {
      const res = await UserService.login(email, password);
      if (res.data.type === 'valid') {
        const data = res.data as { type: string; user: User };
        setToken(data.user);
        navigate('/dashboard');
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
        <form onSubmit={handleSubmit}>
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
            <input type="submit" value="login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
