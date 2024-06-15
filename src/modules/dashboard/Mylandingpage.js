import React, { Fragment } from 'react'
import Mynavbar from '../shares/Mynavbar'
import Myfooter from '../shares/Myfooter'
import Mysidebar from '../shares/Mysidebar'
import { Outlet } from 'react-router-dom'
import Myhomepage from './Myhomepage'

function Mylandingpage() {
  return (
    <Fragment>
        <Mynavbar/>
        <div className='container-fluid cusm'>
            <div className='row'>
            <div className='col-md-2 border'>
               <Mysidebar/>
            </div>
            <div className='col-md-10 border'>
               <Outlet></Outlet>
            </div>
            <div className='col-12'>
                <Myfooter/>
            </div>
            </div>
        </div>

    </Fragment>
  )
}

export default Mylandingpage