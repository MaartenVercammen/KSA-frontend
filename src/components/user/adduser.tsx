import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/userService';
import { user } from '../../types';



const AddUser: React.FC = ()=>{
    const [firstname, setfirstname] = useState<string>("");
    const [lastname, setlastname] = useState<string>("");
    const [birthdate, setbirthdate] = useState<Date>(new Date(Date.now()));
    const [email, setemail] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [street, setstreet] = useState<string>("");
    const [number, setnumber] = useState<number>();
    const [postalcode, setpostalcode] = useState<number>();
    const [city, setcity] = useState<string>("");
    const [typename, settypename] = useState<string>("Lid");
    const [group, setgroup] = useState<string>("Rubskes");
    const nav = useNavigate();

    
    const handlesubmit = async (event: any) =>{
        event.preventDefault()
        await UserService.postUser(createuser(event.target))
        nav("/")
    }

    const createuser = (target: any) => {
        var user: user = {
            firstname: target[0].value,
            lastname: target[1].value,
            birthdate: target[2].value,
            email: target[3].value,
            phone: target[4].value,
            street: target[6].value,
            number: target[7].value,
            postalcode: target[8].value,
            city: target[9].value,
            password: target[5].value,
            typename: target[11].value,
            member: target[10].value,
            leidingover: '',
            duty: '',
        }
        return user;
    }

    const padTo2Digits = (num: number) => {
        return num.toString().padStart(2, '0');
      }

    const formatDate = (date: Date) => {
        return [
            date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-');
      }


    return(
        <form onSubmit={handlesubmit} className="form">
            <div className="form-group">
                <label className='form-label'>Firstname:</label>
                <input className="form-control" type="text" name="firstname" value={firstname} onChange={(event) => setfirstname(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Lastname:</label>
                <input className="form-control" type="text" name="lastname" value={lastname} onChange={(event) => setlastname(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Birthdate:</label>
                <input className="form-control" type="date" name="birthdate" value={formatDate(birthdate)} onChange={(event) => setbirthdate(new Date(event.target.value))}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Email:</label>
                <input className="form-control" type="email" name="email" value={email} onChange={(event) => setemail(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Phone:</label>
                <input className="form-control" type="tel" name="phone" value={phone} onChange={(event) => setphone(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Password:</label>
                <input className="form-control" type="password" name="password" value={password} onChange={(event) => setpassword(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Street:</label>
                <input className="form-control" type="text" name="street" value={street} onChange={(event) => setstreet(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Housenumber:</label>
                <input className="form-control" type="number" name="number" value={number} onChange={(event) => setnumber(parseInt(event.target.value))}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Postalcode:</label>
                <input className="form-control" type="number" name="postalcode" value={postalcode} onChange={(event) => setpostalcode(parseInt(event.target.value))}/>
            </div>
            <div className="form-group">
                <label className='form-label'>City:</label>
                <input className="form-control" type="text" name="city" value={city} onChange={(event) => setcity(event.target.value)}/>
            </div>
            <div className="form-group">
                <label className='form-label'>Group:</label>
                <select className='form-select' name="member" onChange={(event) => setgroup(event.target.value)} value={group}>
                    <option defaultChecked={true} value="Rubskes">Rubskes</option>
                    <option value="Leeuwkes">Leeuwkes</option>
                    <option value="Jongknapen">Jongknapen</option>
                    <option value="Knapen">Knapen</option>
                    <option value="Jonghernieuwer">Jonghernieuwer</option>
                    <option value="Hernieuwer">Hernieuwer</option>
                </select>
            </div>
            <div className="form-group">
                <label className='form-label'>Account type:</label>
                <select className='form-select' name="typename" onChange={(event) => settypename(event.target.value)} value={typename}>
                    <option defaultChecked={true} value="Lid">Lid</option>
                    <option value="Ouder">Ouder</option>
                </select>
            </div>
            <input className="btn btn-primary mt-2" type="submit" value="register"/>
        </form>
    )
}

export default AddUser;