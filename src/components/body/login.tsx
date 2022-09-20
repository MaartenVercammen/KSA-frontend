import React, {useState} from 'react'
import UserService from '../../service/userservice';
import { useNavigate } from 'react-router-dom';
import { user } from '../../types/index'

type Props = {
    setToken: (user: object) => void
}

const Login = ({setToken} : Props) => {
    const [errormsg, setErrormsg] = useState<string>("")
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await UserService.login( e.target.email.value, e.target.password.value)
    if(res.data.type == "valid"){
        setToken(res.data.user)
        navigate("/dashboard");
    }
    else{
        setErrormsg("Invalid input")
    }
}   


  return (
    <div className='login'>
        <div className='login-container'>
            {errormsg && <p>{errormsg}</p>}
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='email'>email</label>
            <input name='email' type="email"></input>
            </div>
            <div>
            <label htmlFor='password'>password</label>
            <input name='password' type="password"></input>
            </div>
            <div className='login-submit-container'>
            <input type="submit" value="login"></input>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login