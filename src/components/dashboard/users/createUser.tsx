import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import UserService from '../../../service/userservice';
import { Roles, User } from '../../../types';

import styles from './createUser.module.css';

type Props = {
  changeTab: (index: number) => void;
};

function CreateUser({ changeTab }: Props) {
  const [name, setname] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [role, setrole] = useState<Roles>(Roles.BRAGGEL);

  const alert = useAlert();

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
    changeTab(1);
  };

  return (
    <div className={styles['create-user']}>
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

        <input type="submit" value="create" className={`${styles.btn} ${styles['btn-default']}`} />
      </form>
    </div>
  );
}

export default CreateUser;
