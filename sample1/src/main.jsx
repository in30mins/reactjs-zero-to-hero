import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import RoutingMain from './routing/RoutingMain.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
        <RoutingMain />
    </BrowserRouter>
  </>
)
