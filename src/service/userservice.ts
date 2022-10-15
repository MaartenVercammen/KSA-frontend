import { instance } from '../axios';
import { User } from '../types';

const getUsers = () => instance.get<User[]>('/user');

const login = (email: string, password: string) =>
  instance.post<{ type: string; user: User } | { type: string; message: string }>('/user/login', {
    email,
    password
  });

const createUser = (user: User) => instance.post<{ type: string; message: string }>('/user', user);

const updateUser = (user: User) => instance.put<{ type: string; message: string }>('/user', user);

const deleteUser = (id: number) =>
  instance.delete<{ type: string; message: string }>(`/user?id=${id}`);

const UserService = {
  getUsers,
  login,
  createUser,
  updateUser,
  deleteUser
};

export default UserService;
