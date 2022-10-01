import { instance, instanceLogin } from "../axios";
import { user } from "../types";

const getUsers = () => instance.get<user[]>("/user");

const login = (email: string, password: string) =>
  instanceLogin.post<{ type: string; user: user }>("/user/login", {
    email: email,
    password: password,
  });

const createUser = (user: user) => instance.post<Response>("/user", user);

const UserService = {
  getUsers,
  login,
  createUser,
};

export default UserService;
