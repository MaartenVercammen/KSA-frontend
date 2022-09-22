import React, {useState, useEffect} from 'react'
import UserService from '../../service/userservice';
import { useNavigate } from 'react-router-dom';

type Props = {
    setToken: (user: object) => void
}

const Login = ({setToken} : Props) => {
    const [errormsg, setErrormsg] = useState<string>("")
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await UserService.login( e.target.email.value, e.target.password.value)
    console.log(res)
    if(res.data.type == "valid"){
        setToken(res.data.user)
        navigate("/dashboard");
    }
    else{
        setErrormsg("Invalid input")
    }
}  

useEffect(() => {
    setErrormsg("")
    setInterval(() => setErrormsg(""), 50000)
}, [])



  return (
    <div className='login'>
        <div className='login-container'>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>email</label>
                <input name='email' type="email"></input>
                
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input name='password' type="password"></input>
            <div>
                {errormsg && <p className='error'>{errormsg}</p>}
            </div>
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