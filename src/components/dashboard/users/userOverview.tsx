import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import UserService from '../../../service/userservice';
import { User } from '../../../types';
import './userOverview.css';

type Props = {
  changeTab: (index: number, ...args) => void;
};

function UserOverview({ changeTab }: Props) {
  const [users, setusers] = useState<User[]>([]);

  const alert = useAlert();

  const getUsers = async () => {
    const res = await UserService.getUsers();
    setusers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (user: User) => {
    changeTab(3, user);
  };

  const deleteUser = async (id: number) => {
    // TODO: remove confirm
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete user')) {
      const res = await UserService.deleteUser(id);
      // TODO: remove alert
      // eslint-disable-next-line no-alert
      alert.show(res.data.message);
      getUsers();
    }
  };

  return (
    <div className="useroveriew">
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
          <a onClick={() => changeTab(2)}>Add User</a>
        </p>
      </div>
    </div>
  );
}

export default UserOverview;
