import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <>
        <h1>404 Error</h1>
        <button onClick={()=>navigate('/')}>Back To Home</button>
    </>
  )
}

export default NotFound