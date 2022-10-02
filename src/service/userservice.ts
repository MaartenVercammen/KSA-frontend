import { instance, instanceLogin } from '../axios';
import { user } from '../types';

const getUsers = () => instance.get<user[]>('/user');

const login = (email: string, password: string) =>
    instanceLogin.post<{ type: string; user: user }>('/user/login', {
        email: email,
        password: password,
    });

const createUser = (user: user) => instance.post<{ type: string; message: string }>('/user', user);

const deleteUser = (id: number) =>
    instance.delete<{ type: string; message: string }>('/user?id=' + id);

const UserService = {
    getUsers,
    login,
    createUser,
    deleteUser,
};

export default UserService;
