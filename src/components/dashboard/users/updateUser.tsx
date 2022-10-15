import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import UserService from '../../../service/userservice';
import { Roles, User } from '../../../types';

type Props = {
  changeTab: (index: number) => void;
  userToUpdate: User;
};

function UpdateUser({ changeTab, userToUpdate }: Props) {
  const [name, setname] = useState<string>(userToUpdate.name);
  const [email, setemail] = useState<string>(userToUpdate.email);
  const [password, setpassword] = useState<string>(userToUpdate.password);
  const [role, setrole] = useState<Roles>(userToUpdate.role);

  const alert = useAlert();

  const updateUser = async (e) => {
    e.preventDefault();
    const user: User = {
      id: userToUpdate.id,
      name,
      email,
      role,
      password
    };
    const res = await UserService.updateUser(user);
    alert.show(res.data.message);
    changeTab(1);
  };

  return (
    <div className="create-user">
      <h1>
        Update
        {` ${userToUpdate.name}`}
      </h1>
      <form className="form-horizontal" onSubmit={updateUser}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">
            Naam{' '}
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Email{' '}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="password">
            Password{' '}
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Hou leeg voor bestaand passwoord te bebouden"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="role">
            Role
          </label>
          <select
            name="role"
            className="form-control form-select"
            defaultValue={userToUpdate.role}
            onChange={(e) => setrole(Roles[e.target.value])}
          >
            <option value={Roles.ADMIN}>Admin</option>
            <option value={Roles.BONDS}>Bonds</option>
            <option value={Roles.BRAGGEL}>BraggelTeam</option>
          </select>
        </div>

        <input type="submit" value="update" className="btn btn-default" />
      </form>
    </div>
  );
}

export default UpdateUser;
