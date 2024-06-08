import React from 'react';
import ReactDOM from 'react-dom/client';
import Myloginpage, { Loginpage, Myloginpage1 } from './modules/auth/Myloginpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myreactbootstrap from './modules/auth/Myreactbootstrap';
import Muidesign from './modules/auth/Muidesign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Myloginpage></Myloginpage>
    <Myloginpage1></Myloginpage1>
    <Loginpage></Loginpage>
    <Myreactbootstrap></Myreactbootstrap>
    <Muidesign></Muidesign>
  
  </React.StrictMode>
);

