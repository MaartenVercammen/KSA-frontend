import axios from '../axios';
import { user } from '../types';

const getAllUsers = () => axios.get<Array<user>>('/user');

const UserService = {
    getAllUsers,
};

export default UserService;