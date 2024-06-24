import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {login} = useAuth();
    const [name, setName] =useState('');
  return (
    <>
        <h1>Login</h1>

        <label>username</label>
        <input type="text" name="name" id="name" value={name} placeholder='username' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>{
            login(name)
            navigate('/' , {replace:true})
        }}>Login</button>
    </>
  )
}

export default Login