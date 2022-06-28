import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';
import {user} from '../../types/index'
import * as userModel from '../../models/userModel'

const UserOverview: React.FC = () =>{
    const [users, setUsers] = useState<user[]>([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers =async () => {    
        const res: AxiosResponse<Array<user>> = await UserService.getAllUsers();
        setUsers(userModel.formatUsersData(res.data))
    }


return(
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th className='col'>voornaam</th>
                    <th>achternaam</th>
                    <th>geboortedatum</th>
                    <th>adres</th>
                    <th>telefoonnummer</th>
                    <th>email</th>
                    <th>usertype</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user: user, index: number) =>
                    <tr>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.birthdate.toDateString()}</td>
                        <td>{user.street} {user.number} {user.postalcode} {user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.typename}</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    </>
)
}

export default UserOverview