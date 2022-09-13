import axios from '../axios';
import { user } from '../types';

const getUsers = () => axios.get<Array<user>>("/http://ksaaarschot.studentenweb.org/api/user")

const UserService = {
   getUsers
};

export default UserService;