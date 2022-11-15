import React, {
  FormEvent, FormEventHandler, lazy, useRef,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../../service/userService';
import ToastManager from '../../../components/toast/ToastManager';

import styles from './createUser.module.css';

const UserForm = lazy(() => import('../../../components/forms/userForm'));

function UpdateUser() {
  const { state: { user } } = useLocation();

  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const updateUser: FormEventHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await UserService.update(new FormData(form.current!));
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
      <h1>
        Update
        {`${user.firstName} ${user.lastName}`}
      </h1>
      <UserForm
        buttonLabel="Toevoegen"
        onSubmit={updateUser}
        ref={form}
        user={user}
      />
    </div>
  );
}

export default UpdateUser;
