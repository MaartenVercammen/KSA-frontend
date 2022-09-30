import { useState, useEffect } from "react";
import UserService from "../../../service/userservice";
import { user } from "../../../types/index";

const UserOverview = () => {
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
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>Role</td>
            <td>update</td>
            <td>delete</td>
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
    </div>
  );
};

export default UserOverview;
