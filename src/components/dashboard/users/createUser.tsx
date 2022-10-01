import React, { useState } from "react";
import UserService from "../../../service/userservice";
import { Roles, user } from "../../../types";

const CreateUser = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [role, setrole] = useState<Roles>(Roles.BRAGGEL);

  const createUser = async (e) => {
    e.preventDefault();
    const user: user = {
      id: -1,
      name: name,
      email: email,
      role: role,
      password: password,
    };
    const res = await UserService.createUser(user);
    console.log(res.data);
  };

  return (
    <div className="create-user">
      <h1>Add User</h1>
      <form className="form-horizontal" onSubmit={createUser}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">
            Naam{" "}
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="password">
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="role">
            Role
          </label>
          <select
            name="role"
            className="form-control form-select"
            defaultValue={Roles.BRAGGEL}
            onChange={(e) => setrole(Roles[e.target.value])}
          >
            <option value={Roles.ADMIN}>Admin</option>
            <option value={Roles.BONDS}>Bonds</option>
            <option value={Roles.BRAGGEL}>BraggelTeam</option>
          </select>
        </div>

        <input type="submit" value="create" className="btn btn-default" />
      </form>
    </div>
  );
};

export default CreateUser;
