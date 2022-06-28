import { setuid } from 'process';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../services/userService';
import {user} from '../../../types/index'
import AddUserInputfield from './AdduserInputfield';

const AddUser: React.FC = ()=>{
    const [user, setUser] = useState<user>({
        id: 0,
        birthdate: new Date(""),
        city: "",
        email: "",
        firstname: "",
        lastname: "",
        number: 0,
        password: "",
        phone: "",
        postalcode: 0,
        street: "",
        typename: "Lid",
    });

    const nav = useNavigate();

    const handleChange = (event: React.ChangeEvent) => {
        const {name, value} = event.currentTarget as HTMLInputElement
        setUser({...user, [name]: value})
      };


      const handleSubmit = async (event: any) =>{
        event.preventDefault()
        console.log(user)
        var res = await UserService.createUser(user);
        console.log(res)
      }

return(
    <>
    <form className='form' onSubmit={handleSubmit}>
        <div className='row'>
            <AddUserInputfield field={"firstname"} handler={handleChange} type="text" name="Voornaam" input={user.firstname.toString()}/>

            <AddUserInputfield field={"lastname"} handler={handleChange} type="text" name="Achternaam" input={user.lastname.toString()}/>
        </div>
            <AddUserInputfield field={"email"} handler={handleChange} type="email" name="Email" input={user.email.toString()}/>
        <div className='row'>
            <AddUserInputfield field={"phone"} handler={handleChange} type="text" name="Telefoon" input={user.phone.toString()}/>

            <AddUserInputfield field={"birthdate"} handler={handleChange} type="date" name="Geboortedatum" input={user.birthdate.toString()}/>
        </div>
            <AddUserInputfield field={"password"} handler={handleChange} type="password" name="Wachtwoord" input={user.password.toString()}/>
        <div className='row'>
            <AddUserInputfield field={"street"} handler={handleChange} type="text" name="Straat" input={user.street.toString()}/>

            <AddUserInputfield field={"number"} handler={handleChange} type="number" name="Huisnummer" input={user.number.toString()}/>

            <AddUserInputfield field={"postalcode"} handler={handleChange} type="number" name="Postcode" input={user.postalcode.toString()}/>

            <AddUserInputfield field={"city"} handler={handleChange} type="text" name="Plaats" input={user.city.toString()}/>
        </div>

            <button type="submit" className='button btn-primary my-2'>submit</button>
        
    </form>
    </>
)
}


export default AddUser