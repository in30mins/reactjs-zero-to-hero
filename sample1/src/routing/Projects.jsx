import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <>
        <h1>Projects</h1>
        <NavLink to='/projects/oldprojects'>OldProjects</NavLink>
        <NavLink to='/projects/newprojects'>NewProjects</NavLink>

        <Outlet />
    </>
  )
}

export default Projects