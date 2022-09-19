import instance from '../axios';
import { user } from '../types';

const getUsers = () => instance.get<Array<user>>("/user")

const login = (email: string, password: string) => instance.post<{type: string, user: user}>("/user/login", {"email": email, "password": password})

const IsUserLoggedIn = () => instance.get<user>('/IsUserLoggedIn');

const UserService = {
   getUsers,
   login,
   IsUserLoggedIn
};

export default UserService;