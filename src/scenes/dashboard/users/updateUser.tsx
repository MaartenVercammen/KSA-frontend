import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../../service/userService';
import { Roles, User } from '../../../types';
import styles from './createUser.module.css';
import ToastManager from '../../../components/toast/ToastManager';

function UpdateUser() {
  const location = useLocation();
  const userToUpdate : User = location.state.user;

  // TODO switch to formData
  const [firstName, setFirstName] = useState<string>(userToUpdate.firstName);
  const [lastName, setLastName] = useState<string>(userToUpdate.lastName);
  const [email, setemail] = useState<string>(userToUpdate.email);
  const [password, setpassword] = useState<string>(userToUpdate.password);
  const [role, setrole] = useState<Roles>(userToUpdate.role);

  const navigate = useNavigate();

  const updateUser = async (e) => {
    try {
      e.preventDefault();
      const user: User = {
        id: userToUpdate.id,
        firstName,
        lastName,
        email,
        role,
        password,
      };
      const res = await UserService.update(user);
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
        {`${userToUpdate.firstName} ${userToUpdate.lastName}`}
      </h1>
      <form className={styles['form-horizontal']} onSubmit={updateUser}>
        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="firstName">
            Voornaam
            {' '}
          </label>
          <input
            type="text"
            name="firstName"
            className={styles['form-control']}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="lastName">
            Naam
            {' '}
          </label>
          <input
            type="text"
            name="lastName"
            className={styles['form-control']}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="email">
            Email
            {' '}
          </label>
          <input
            type="email"
            name="email"
            className={styles['form-control']}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="password">
            Password
            {' '}
          </label>
          <input
            type="password"
            name="password"
            className={styles['form-control']}
            placeholder="Hou leeg voor bestaand passwoord te bebouden"
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$|^$"
            title="Password moet 1 hoofdldetter en 1 kleine letter bevatten, minstens 8 karakters lang zijn en 1 getal bevatten"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="role">
            Role
          </label>
          <select
            name="role"
            className={`${styles['form-control']} ${styles['form-select']}`}
            defaultValue={userToUpdate.role}
            onChange={(e) => setrole(Roles[e.target.value])}
          >
            <option value={Roles.ADMIN}>Admin</option>
            <option value={Roles.BONDS}>Bonds</option>
            <option value={Roles.BRAGGEL}>BraggelTeam</option>
          </select>
        </div>

        <button type="submit">Bijwerken</button>
      </form>
    </div>
  );
}

export default UpdateUser;
