import React, { lazy, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../service/userService';

import styles from './createUser.module.css';
import ToastManager from '../../../components/toast/ToastManager';

const UserForm = lazy(() => import('../../../components/forms/userForm'));

function CreateUser() {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const createUser = async (e) => {
    try {
      e.preventDefault();
      const res = await UserService.create(new FormData(form.current!));
      ToastManager.showToast({ label: res.message, variant: res.type });
      navigate('/users');
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add User</h1>
      <UserForm
        buttonLabel="Toevoegen"
        onSubmit={createUser}
        ref={form}
      />
    </div>
  );
}

export default CreateUser;
