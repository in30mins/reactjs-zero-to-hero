import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <>
        <NavLink to='/projects/newprojects'>NewProjects</NavLink>
        <br></br>
        <br></br>
        <NavLink to='/projects/oldprojects'>OldProjects</NavLink>

        <Outlet />
    </>
  )
}

export default Projects