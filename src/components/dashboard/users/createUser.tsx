import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../service/userservice';
import { Roles, User } from '../../../types';

import styles from './createUser.module.css';

function CreateUser() {
  const [name, setname] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [role, setrole] = useState<Roles>(Roles.BRAGGEL);

  const alert = useAlert();
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const user: User = {
      id: -1,
      name,
      email,
      role,
      password,
    };
    const res = await UserService.createUser(user);
    alert.show(res.data.message);
    navigate('/users');
  };

  return (
    <div className={styles.container}>
      <h1>Add User</h1>
      <form className={styles['form-horizontal']} onSubmit={createUser}>
        <div className={styles['form-group']}>
          <label className={styles['control-label']} htmlFor="name">
            Naam
            {' '}
          </label>
          <input
            type="text"
            name="name"
            className={styles['form-control']}
            value={name}
            onChange={(e) => setname(e.target.value)}
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
            required
            minLength={8}
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
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
            defaultValue={Roles.BRAGGEL}
            onChange={(e) => setrole(Roles[e.target.value])}
          >
            <option value={Roles.ADMIN}>Admin</option>
            <option value={Roles.BONDS}>Bonds</option>
            <option value={Roles.BRAGGEL}>BraggelTeam</option>
          </select>
        </div>

        <button type="submit">Toevoegen</button>
      </form>
    </div>
  );
}

export default CreateUser;
