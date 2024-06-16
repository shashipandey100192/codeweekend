import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mylogin from './modules/auth/Mylogin';
import Myregistor from './modules/auth/Myregistor';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myforms from './modules/dashboard/Myforms';
import Myhomepage from './modules/dashboard/Myhomepage';
import Mygraph from './modules/dashboard/Mygraph';
import Myaxiospage from './modules/dashboard/Myaxiospage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Mylogin/>}/>
        <Route path="registor" element={<Myregistor/>}/>
        <Route path='dashboard' element={<Mylandingpage/>}>
            <Route path='' element={<Myhomepage/>}/>
            <Route path="myform" element={<Myforms/>}/>
            <Route path="mychart" element={<Mygraph/>}/>
            <Route path="myaxios" element={<Myaxiospage/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>

  
  </React.StrictMode>
);

