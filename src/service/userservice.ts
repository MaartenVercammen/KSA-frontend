import axios from '../axios';
import { user } from '../types';

const getUsers = () => axios.get<Array<user>>("http://localhost:3000/user")

const UserService = {
   getUsers
};

export default UserService;