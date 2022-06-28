import axios from '../axios';
import { user } from '../types';

const getAllUsers = () => axios.get<Array<user>>('/user');

const createUser = (user: user) => axios.post<Response>('/user/lid', user);

const deleteUser = (id: number) => axios.delete<Response>('user?id=' + id)

const UserService = {
    getAllUsers,
    createUser,
    deleteUser,
};

export default UserService;