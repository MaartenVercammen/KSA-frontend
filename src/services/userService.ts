import axios from '../axios';
import { user } from '../types';

const getAllUsers = () => axios.get<Array<user>>('/user');

const postUser = (user: user) => axios.post<Array<user>>('/user', user);

const getUser = (fristname: string, lastname: string) =>
    axios.get('/user/get?firstname=' + fristname + '&lastname=' + lastname);

const UserService = {
    getAllUsers,
    postUser,
    getUser,
};

export default UserService;
