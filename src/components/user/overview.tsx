import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';
import { user } from '../../types';


const UserOverview: React.FC = ()=>{
    const [users, setusers] = useState<Array<user>>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async ()=>{
        const res: AxiosResponse<Array<user>> = await UserService.getAllUsers();
        console.log(res.data)
        setusers(res.data)
    };
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th className='col'>firstname</th>
                    <th className='col'>lastname</th>
                    <th className='col'>birthdate</th>
                    <th className='col'>email</th>
                    <th className='col'>phonenumber</th>
                    <th className='col'>street</th>
                    <th className='col'>number</th>
                    <th className='col'>postalcode</th>
                    <th className='col'>city</th>
                    <th className='col'>usertype</th>
                    <th className='col'>group</th>
                    <th className='col'>leaderof</th>
                    <th className='col'>duty</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: user) =>
                <tr>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.street}</td>
                    <td>{user.number}</td>
                    <td>{user.postalcode}</td>
                    <td>{user.city}</td>
                    <td>{user.typename}</td>
                    <td>{user.member}</td>
                    <td>{user.leidingover}</td> 
                    <td>{user.duty}</td> 
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserOverview;