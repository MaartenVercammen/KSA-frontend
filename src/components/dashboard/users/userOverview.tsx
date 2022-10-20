import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../service/userservice';
import { User } from '../../../types';

import styles from './userOverview.module.css';

function UserOverview() {
  const [users, setusers] = useState<User[]>([]);

  const alert = useAlert();
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await UserService.getUsers();
    setusers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (user: User) => {
    navigate('/users/update', { state: { user } });
  };

  const deleteUser = async (id: number) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete user')) {
      const res = await UserService.deleteUser(id);
      alert.show(res.data.message);
      getUsers();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users
                        && users.map(({
                          id, name, email, role, password,
                        }: User) => (
                          <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => updateUser({
                                  id,
                                  name,
                                  password,
                                  email,
                                  role,
                                })}
                              >
                                Update
                              </button>
                            </td>
                            <td>
                              <button type="button" onClick={() => deleteUser(id)}>X</button>
                            </td>
                          </tr>
                        ))}
        </tbody>
      </table>
      <div className="button">
        <p>
          <a onClick={() => navigate('/users/create')}>Add User</a>
        </p>
      </div>
    </div>
  );
}

export default UserOverview;
