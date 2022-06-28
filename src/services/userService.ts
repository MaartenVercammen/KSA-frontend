import axios from '../axios';
import { user } from '../types';

const getAllUsers = () => axios.get<Array<user>>('/user');

const createUser = (user: user) => axios.post<Response>('/user/add', user);

const UserService = {
    getAllUsers,
    createUser,
};

export default UserService;