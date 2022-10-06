import { useState, useEffect } from 'react';
import UserService from '../../../service/userservice';
import { user } from '../../../types/index';
import './userOverview.css';
import { useAlert } from 'react-alert';

type Props = {
  changeTab: (index: number, ...args) => void;
};

function UserOverview({ changeTab }: Props) {
  const [users, setusers] = useState<user[]>([]);

  const alert = useAlert();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await UserService.getUsers();
    setusers(res.data);
  };

  const updateUser = (user: user) => {
    changeTab(3, user);
  };

  const deleteUser = async (id: number) => {
    if (window.confirm('Delete user')) {
      const res = await UserService.deleteUser(id);
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
                        }: user) => (
                          <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role}</td>
                            <td>
                              <button
                                onClick={(e) => updateUser({
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
                              <button onClick={(e) => deleteUser(id)}>X</button>
                            </td>
                          </tr>
                        ))}
        </tbody>
      </table>
      <div className="button">
        <p>
          <a onClick={(e) => changeTab(2)}>Add User</a>
        </p>
      </div>
    </div>
  );
}

export default UserOverview;
