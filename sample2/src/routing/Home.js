import React from 'react'
import { useAuth } from './auth';


const Home = () => {

  const data = useAuth();
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home