import React from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {
  return (
   <div className='container'>
    <div className='row'>
        <div className='col-12 text-center'>
            <h1 className='error' >404</h1>
            <Link to="/" className="btn btn-danger">Back to Home page</Link>
        </div>
    </div>

   </div>
  )
}

export default Myerrorpage