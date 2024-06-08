import React from 'react';
import ReactDOM from 'react-dom/client';
import Myloginpage, { Myloginpage1 } from './modules/auth/Myloginpage';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Myloginpage></Myloginpage>
    <Myloginpage1></Myloginpage1>
  
  </React.StrictMode>
);

