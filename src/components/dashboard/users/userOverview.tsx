import { useState, useEffect } from "react";
import UserService from "../../../service/userservice";
import { user } from "../../../types/index";
import "./userOverview.scss";

type Props = {
  settab: (index: number) => void;
};

const UserOverview = ({ settab }: Props) => {
  const [users, setusers] = useState<user[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await UserService.getUsers();
    setusers(res.data);
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
          {users &&
            users.map(({ name, email, role }, index) => (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>update</td>
                <td>delete</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p>
        <a onClick={(e) => settab(2)}>Add User</a>
      </p>
    </div>
  );
};

export default UserOverview;
