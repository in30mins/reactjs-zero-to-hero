import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Main from './routing/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  
);

