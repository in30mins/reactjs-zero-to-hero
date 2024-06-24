import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Navbar = () => {
  const {user,logout} = useAuth();
  return (
    <>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/users' >Users</NavLink>
        {
          user ?
          (<NavLink to='/logout'>Logout</NavLink>)
          :
          (<NavLink to='/login'>Login</NavLink>)
        }
        </nav>
    </>
  )
}

export default Navbar