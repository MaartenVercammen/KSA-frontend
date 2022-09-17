import axios from '../axios';
import { user } from '../types';

const getUsers = () => axios.get<Array<user>>("http://188.166.203.186/user")

const UserService = {
   getUsers
};

export default UserService;