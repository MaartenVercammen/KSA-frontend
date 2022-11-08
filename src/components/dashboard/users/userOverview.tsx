import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../service/userService';
import { User } from '../../../types';

import styles from './userOverview.module.css';

function UserOverview() {
  const [users, setUsers] = useState<User[]>([]);

  const alert = useAlert();
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await UserService.getAll();
    setUsers(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (user: User) => {
    navigate('/users/update', { state: { user } });
  };

  const deleteUser = async (user: User) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete user')) {
      const res = await UserService.remove(user);
      alert.show(res.message);
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
                        && users.map((user: User) => (
                          <tr key={user.id}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => updateUser(user)}
                              >
                                Update
                              </button>
                            </td>
                            <td>
                              <button type="button" onClick={() => deleteUser(user)}>X</button>
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
