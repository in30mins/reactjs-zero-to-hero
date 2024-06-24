import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data'

const UserDetailes = () => {
    const {userId} = useParams();
    const userDetailes =data.find((data1)=>data1.id==userId)
  return (
    <>
        <h1>UserDetailes</h1>
        <br></br>
        <h3>{userDetailes.name}</h3>
        <h3>{userDetailes.email}</h3>
        <h3>{userDetailes.company.name}</h3>
        <h3>{userDetailes.phone}</h3>
        <h3>{userDetailes.website}</h3>
    </>
  )
}

export default UserDetailes