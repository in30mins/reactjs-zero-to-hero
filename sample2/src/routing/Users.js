import React from 'react'
import data from './uaersData'
import { Link } from 'react-router-dom'
const Users = () => {
  return (
    <>
        <h1>Users</h1>
        {
            data.map((eachUser)=>{
                const {id,name,email} =eachUser
                return(
                    <Link to={`/users/${id}`} key={id}>
                        <article> 
                            <h3>{name}</h3>
                            <h5>{email}</h5>
                        </article>
                    </Link>
                )
            }
            )
        }    
    </>
  )
}

export default Users