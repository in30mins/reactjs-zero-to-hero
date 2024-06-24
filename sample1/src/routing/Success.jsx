import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Successfully Submited ...</h1>
      <button onClick={()=>navigate('/')}>Back</button>
    </>
  )
}

export default Success