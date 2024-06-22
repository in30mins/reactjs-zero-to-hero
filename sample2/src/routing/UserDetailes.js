import React from 'react'
import userData from './uaersData'
import { useParams } from 'react-router-dom'

const UserDetailes = () => {

    const {userId} = useParams()
    
    const userDeteailsData = userData.find((eachUser)=>eachUser.id ==userId)
  return (
    <div>
        <h1>UserDetailes</h1>
        <p>Name : {userDeteailsData.name}</p>
        <p>Email : {userDeteailsData.email}</p>
        <p>Company Name : {userDeteailsData.company.name}</p>
        <p>City : {userDeteailsData.address.city}</p>
    </div>
  )
}

export default UserDetailes