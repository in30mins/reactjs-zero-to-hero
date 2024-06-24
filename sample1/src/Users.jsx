import React from 'react'
import data from './data'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
        <h1>Users</h1>

        <br></br>
        <br></br>
        <br></br>
        {
            data.map((eachUser)=>{
                const {id, name,username} = eachUser
                return(
                    <Link to={`/users/${id}`} key={id}>
                        <article>
                            <h3>{name}</h3>
                            <h5>{username}</h5>
                        </article>
                    </Link>
                )
            })
        }
    </>
  )
}

export default Users