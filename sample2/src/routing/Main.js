import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
// import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import OldProjects from './OldProjects'
import NewProjects from './NewProjects'
import NotFound from './NotFound'
import Success from './Success'
import Users from './Users'
import UserDetailes from './UserDetailes'
import Login from './Login'
import Logout from './Logout'
import {AuthProvider} from './auth'
import PrivateRoute from './PrivateRoute'

const LazyAbout = React.lazy(()=>import('./About'));

const Main = () => {
  return (
    <>
        <AuthProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' 
                element={<React.Suspense
                fallback='Loading ...'
                >
                    <LazyAbout />
                </React.Suspense>} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} >
                <Route index element={<NewProjects />} />
                <Route path='oldprojects' element={<OldProjects />} />
                <Route path= 'newprojects' element={<NewProjects />} />
            </Route>
            <Route path='success' element={<Success />} />
            <Route 
                path='/users' 
                element={
                <PrivateRoute>
                    <Users />
                </PrivateRoute>
                }
            />
            <Route path='/users/:userId' element={<UserDetailes />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </AuthProvider>
    </>
  )
}

export default Main