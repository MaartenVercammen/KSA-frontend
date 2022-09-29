import { instance, instanceLogin } from "../axios";
import { user } from "../types";

const getUsers = () => instance.get<Array<user>>("/user");

const login = (email: string, password: string) =>
  instanceLogin.post<{ type: string; user: user }>("/user/login", {
    email: email,
    password: password,
  });

const UserService = {
  getUsers,
  login,
};

export default UserService;
