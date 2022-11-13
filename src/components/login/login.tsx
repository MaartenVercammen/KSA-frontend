import React, { lazy, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../../service/authService';
import ToastManager from '../toast/ToastManager';

import styles from './login.module.css';

type Props = {
  setToken: (user: object) => void;
};

const Input = lazy(() => import('../form/input'));

function Login({ setToken }: Props) {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  if (sessionStorage.getItem('user') != null) {
    return <Navigate to="/dashboard" />;
  }

  const login = async () => {
    try {
      const { type, user } = await AuthService.login(new FormData(form.current!));
      if (type === 'valid') {
        setToken(user);
        navigate('/braggel');
      }
    } catch (err: unknown) {
      ToastManager.showToast({ label: 'Invalid input', variant: 'error' });
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
          <Input label="e-mail" name="email" required />
          <Input label="wachtwoord" name="password" type="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
