import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import NewProjects from './NewProjects'
import OldProjects from './OldProjects'
import Error404 from './Error404'
import Success from './Success'
import Navbar from './Navbar'
import Users from '../Users'
import UserDetailes from '../UserDetailes'
import Login from './Login'
import LogOut from './LogOut'
import { AuthProvder } from './auth'
import PrivateRoute from './PrivateRoute'

const LazyAbout = React.lazy(()=>import('./About'))

const RoutingMain = () => {
  return (
    <>
      <AuthProvder>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={
              <React.Suspense fallback='Loading ...'>
                <About />
              </React.Suspense>
            } ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/projects' element={<Projects />} >
                <Route index element={<OldProjects />} />
                <Route path='newprojects' element={<NewProjects />} />
                <Route path='oldprojects' element={<OldProjects />} />
            </Route>
            <Route path='/users' element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            } />
            <Route path='/users/:userId' element={<UserDetailes />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/success' element={<Success />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
      </AuthProvder>
    </>
  )
}

export default RoutingMain