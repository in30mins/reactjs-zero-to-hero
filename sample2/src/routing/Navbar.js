import React from 'react'
import { useAuth } from './auth'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const {user,logout}= useAuth()
  
  return (
    <>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/users'>Users</NavLink>
            {
              user?(
                <NavLink to="/logout" onClick={logout}>
                  Logout
                  </NavLink>
              )
              
              :(
                <NavLink to='/login'>
                  Login
                </NavLink>
              )
              
            }
        </nav>
    </>
  )
}

export default Navbar